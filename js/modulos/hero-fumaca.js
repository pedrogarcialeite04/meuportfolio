import { obterDprIdealCanvas, mqPerformanceMobile, vincularDocumentoOculto } from "../utilitarios/geral.js";

/**
 * FumaÃ§a interativa na 1Âª pÃ¡gina (#hero): revela as linhas onduladas do fundo.
 * Canvas 2D (sem WebGL) â€” estÃ¡vel em todos os browsers, nÃ£o toca na mÃ¡scara do rosto.
 *
 * Camadas:
 *  - .hero-lines (z0) + .hero-veil (z2): linhas ocultas sob vÃ©u claro
 *  - .hero-smoke-zone (z8): faixa superior â€” fumaÃ§a revela linhas (cursor/toque)
 *  - .hero-stage (z10): rosto + mÃ¡scara goo â€” intocada
 */
function configurarFumacaHero(movimentoReduzido) {
  const canvas = document.getElementById("hero-smoke");
  const zone = document.querySelector(".hero-smoke-zone");
  const hero = document.getElementById("hero");
  if (!canvas || !zone || !hero || movimentoReduzido) {
    if (zone) zone.style.display = "none";
    return () => {};
  }

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) {
    zone.style.display = "none";
    return () => {};
  }

  const density = document.createElement("canvas");
  const dCtx = density.getContext("2d", { alpha: true });
  const densityBlur = document.createElement("canvas");
  const dbCtx = densityBlur.getContext("2d", { alpha: true });
  const linesLayer = document.createElement("canvas");
  const lCtx = linesLayer.getContext("2d", { alpha: true });
  const linesStatic = document.createElement("canvas");
  const lsCtx = linesStatic.getContext("2d", { alpha: true });
  if (!dCtx || !dbCtx || !lCtx || !lsCtx) {
    zone.style.display = "none";
    return () => {};
  }

  let linesImg = null;
  let linesReady = false;
  let proceduralFrame = 0;
  const img = new Image();
  img.decoding = "async";
  img.onload = () => {
    linesImg = img;
    linesReady = img.naturalWidth > 0 && img.naturalHeight > 0;
    rebuildLinesStatic(0);
  };
  img.onerror = () => {
    linesReady = false;
  };
  img.src = "./assets/svgs/hero-lines.svg";

  let cssW = 1;
  let cssH = 1;
  let dpr = 1;

  const applyCanvasSize = (c, w, h, ratio) => {
    c.width = Math.max(1, Math.round(w * ratio));
    c.height = Math.max(1, Math.round(h * ratio));
  };

  const resize = () => {
    const rect = zone.getBoundingClientRect();
    cssW = Math.max(1, Math.round(rect.width));
    cssH = Math.max(1, Math.round(rect.height));
    dpr = obterDprIdealCanvas(2, 1.35);

    applyCanvasSize(canvas, cssW, cssH, dpr);
    applyCanvasSize(density, cssW, cssH, dpr);
    applyCanvasSize(densityBlur, cssW, cssH, dpr);
    applyCanvasSize(linesLayer, cssW, cssH, dpr);
    applyCanvasSize(linesStatic, cssW, cssH, dpr);

    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dbCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    lCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    lsCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    rebuildLinesStatic(0);
  };
  const rebuildLinesStatic = (t) => {
    lsCtx.clearRect(0, 0, cssW, cssH);
    lsCtx.save();
    lsCtx.filter = "brightness(1.14) contrast(1.06) saturate(0.92)";
    if (linesReady) drawLinesCover(lsCtx, cssW, cssH);
    else drawProceduralLines(lsCtx, cssW, cssH, t);
    lsCtx.restore();
  };

  let targetX = -9999;
  let targetY = -9999;
  let px = -9999;
  let py = -9999;
  let ppx = -9999;
  let ppy = -9999;
  let stampX = -9999;
  let stampY = -9999;
  let inside = false;

  const applyPointer = (clientX, clientY) => {
    const rect = zone.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    inside = x >= -24 && x <= rect.width + 24 && y >= -24 && y <= rect.height + 24;
    targetX = x;
    targetY = y;
  };

  const onPointerMove = (e) => applyPointer(e.clientX, e.clientY);
  const onPointerDown = (e) => applyPointer(e.clientX, e.clientY);
  const onTouch = (e) => {
    if (e.touches && e.touches.length) {
      applyPointer(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pointerdown", onPointerDown, { passive: true });
  window.addEventListener("touchstart", onTouch, { passive: true });
  window.addEventListener("touchmove", onTouch, { passive: true });

  const drawLinesCover = (targetCtx, w, h) => {
    if (!linesReady || !linesImg) return;
    const ir = linesImg.naturalWidth / linesImg.naturalHeight;
    const cr = w / h;
    let dw;
    let dh;
    let dx;
    let dy;
    if (cr > ir) {
      dw = w;
      dh = w / ir;
      dx = 0;
      dy = (h - dh) * 0.2;
    } else {
      dh = h;
      dw = h * ir;
      dx = (w - dw) * 0.5;
      dy = 0;
    }
    targetCtx.drawImage(linesImg, dx, dy, dw, dh);
  };

  const drawProceduralLines = (targetCtx, w, h, t) => {
    targetCtx.save();
    targetCtx.strokeStyle = "rgba(42, 46, 36, 0.78)";
    targetCtx.lineWidth = 1.2;
    targetCtx.lineCap = "round";
    const rows = 14;
    for (let i = 0; i < rows; i += 1) {
      const y = (h / (rows + 1)) * (i + 1) + Math.sin(t * 0.4 + i) * 3;
      targetCtx.beginPath();
      for (let x = -40; x <= w + 40; x += 28) {
        const wave = Math.sin((x + i * 40) * 0.012 + t * 0.25) * 18;
        if (x <= -40) targetCtx.moveTo(x, y + wave);
        else targetCtx.lineTo(x, y + wave);
      }
      targetCtx.stroke();
    }
    targetCtx.restore();
  };

  resize();
  rebuildLinesStatic(0);

  const LIQUID = {
    stampSpacing: 4.5,
    decay: 0.13,
    decayOutside: 0.34,
    brushRadius: 40,
    ribbonWidth: 50,
    hazeBlur: 12,
    satelliteCount: 2,
    diffuseMix: 0.12,
  };

  const injectLiquidBlob = (x, y, radius, alpha) => {
    dCtx.globalCompositeOperation = "source-over";
    const g = dCtx.createRadialGradient(x, y, 0, x, y, radius);
    g.addColorStop(0, `rgba(255,255,255,${alpha})`);
    g.addColorStop(0.22, `rgba(255,255,255,${alpha * 0.78})`);
    g.addColorStop(0.48, `rgba(255,255,255,${alpha * 0.42})`);
    g.addColorStop(0.72, `rgba(255,255,255,${alpha * 0.14})`);
    g.addColorStop(1, "rgba(255,255,255,0)");
    dCtx.fillStyle = g;
    dCtx.beginPath();
    dCtx.arc(x, y, radius, 0, Math.PI * 2);
    dCtx.fill();
  };

  const injectLiquidSatellites = (x, y, radius, alpha, phase) => {
    const orbits = [
      [Math.cos(phase) * radius * 0.34, Math.sin(phase) * radius * 0.28, 0.58],
      [Math.cos(phase + 2.1) * radius * 0.42, Math.sin(phase + 1.4) * radius * 0.36, 0.44],
      [Math.cos(phase - 1.6) * radius * 0.3, Math.sin(phase - 2.3) * radius * 0.32, 0.36],
    ];
    orbits.slice(0, LIQUID.satelliteCount).forEach(([ox, oy, scale]) => {
      injectLiquidBlob(x + ox, y + oy, radius * scale, alpha * 0.62);
    });
  };

  const injectSoftRibbon = (x0, y0, x1, y1, width, alpha) => {
    const dist = Math.hypot(x1 - x0, y1 - y0);
    if (dist < 0.35) return;
    dCtx.save();
    dCtx.globalCompositeOperation = "source-over";
    dCtx.lineCap = "round";
    dCtx.lineJoin = "round";
    dCtx.lineWidth = width;
    dCtx.shadowColor = `rgba(255,255,255,${alpha * 0.55})`;
    dCtx.shadowBlur = width * 0.42;
    const g = dCtx.createLinearGradient(x0, y0, x1, y1);
    g.addColorStop(0, `rgba(255,255,255,${alpha * 0.55})`);
    g.addColorStop(0.5, `rgba(255,255,255,${alpha})`);
    g.addColorStop(1, `rgba(255,255,255,${alpha * 0.55})`);
    dCtx.strokeStyle = g;
    dCtx.beginPath();
    dCtx.moveTo(x0, y0);
    dCtx.lineTo(x1, y1);
    dCtx.stroke();
    dCtx.restore();
  };

  const injectLiquidAt = (x, y, speed, phase) => {
    const r = LIQUID.brushRadius + Math.min(speed * 520, 48);
    injectLiquidBlob(x, y, r, 0.92);
    injectLiquidSatellites(x, y, r, 0.72, phase);
  };

  const stampLiquidPath = (x0, y0, x1, y1, speed, phase) => {
    const dist = Math.hypot(x1 - x0, y1 - y0);
    if (dist < 0.01) {
      injectLiquidAt(x1, y1, speed, phase);
      return;
    }
    injectSoftRibbon(x0, y0, x1, y1, LIQUID.ribbonWidth, 0.72);
    const steps = Math.max(1, Math.ceil(dist / LIQUID.stampSpacing));
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      const x = x0 + (x1 - x0) * t;
      const y = y0 + (y1 - y0) * t;
      const wobble = Math.sin(t * 14 + phase) * 1.8;
      injectLiquidAt(x + wobble, y - wobble * 0.7, speed, phase + t * 2.4);
    }
  };

  const diffuseDensity = () => {
    dbCtx.clearRect(0, 0, cssW, cssH);
    dbCtx.filter = "blur(5px)";
    dbCtx.drawImage(density, 0, 0, cssW, cssH);
    dbCtx.filter = "none";
    dCtx.globalCompositeOperation = "source-over";
    dCtx.globalAlpha = LIQUID.diffuseMix;
    dCtx.drawImage(densityBlur, 0, 0, cssW, cssH);
    dCtx.globalAlpha = 1;
  };

  let heroVisible = true;
  let raf = 0;
  let docHidden = document.hidden;
  let diffuseFrame = 0;
  const start = performance.now();

  function stopSmokeFrame() {
    if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  }

  function ensureSmokeFrame() {
    if (!raf && heroVisible && !docHidden) raf = requestAnimationFrame(frame);
  }

  function frame() {
    raf = 0;
    if (!heroVisible || docHidden) return;

    const t = (performance.now() - start) * 0.001;

    dCtx.globalCompositeOperation = "destination-out";
    dCtx.globalAlpha = inside ? LIQUID.decay : LIQUID.decayOutside;
    dCtx.fillStyle = "#000";
    dCtx.fillRect(0, 0, cssW, cssH);
    dCtx.globalAlpha = 1;

    if (inside) {
      if (stampX < -500) {
        stampX = targetX;
        stampY = targetY;
        px = targetX;
        py = targetY;
        ppx = targetX;
        ppy = targetY;
      }

      const phase = t * 4.2;
      const segSpeed = Math.hypot(targetX - stampX, targetY - stampY);
      stampLiquidPath(stampX, stampY, targetX, targetY, segSpeed, phase);
      stampX = targetX;
      stampY = targetY;

      ppx = px;
      ppy = py;
      px += (targetX - px) * 0.58;
      py += (targetY - py) * 0.58;
      injectLiquidAt(px, py, Math.hypot(px - ppx, py - ppy), phase + 1.7);
    } else {
      stampX = -9999;
      stampY = -9999;
    }

    diffuseFrame += 1;
    if (!mqPerformanceMobile.matches || diffuseFrame % 2 === 0) diffuseDensity();

    ctx.clearRect(0, 0, cssW, cssH);

    ctx.save();
    ctx.globalAlpha = 0.22;
    ctx.fillStyle = "rgba(158, 162, 146, 0.5)";
    ctx.filter = `blur(${LIQUID.hazeBlur}px)`;
    ctx.drawImage(density, 0, 0, cssW, cssH);
    ctx.restore();

    if (!linesReady) {
      proceduralFrame += 1;
      if (proceduralFrame % 2 === 0) rebuildLinesStatic(t);
    }

    lCtx.clearRect(0, 0, cssW, cssH);
    lCtx.drawImage(linesStatic, 0, 0, cssW, cssH);
    lCtx.globalCompositeOperation = "destination-in";
    lCtx.drawImage(density, 0, 0, cssW, cssH);
    lCtx.globalCompositeOperation = "source-over";

    ctx.save();
    ctx.filter = "brightness(1.1) contrast(1.04)";
    ctx.globalAlpha = 0.94;
    ctx.drawImage(linesLayer, 0, 0, cssW, cssH);
    ctx.restore();

    ensureSmokeFrame();
  }

  let io = null;
  if (typeof IntersectionObserver === "function") {
    io = new IntersectionObserver(
      (entries) => {
        heroVisible = entries.some((en) => en.isIntersecting);
        if (heroVisible) ensureSmokeFrame();
        else stopSmokeFrame();
      },
      { threshold: 0, rootMargin: "80px 0px" },
    );
    io.observe(hero);
  }

  const unbindSmokeDocHidden = vincularDocumentoOculto((hidden) => {
    docHidden = hidden;
    if (hidden) stopSmokeFrame();
    else ensureSmokeFrame();
  });

  let ro = null;
  if (typeof ResizeObserver === "function") {
    let roRaf = 0;
    ro = new ResizeObserver(() => {
      if (roRaf) return;
      roRaf = requestAnimationFrame(() => {
        roRaf = 0;
        resize();
      });
    });
    ro.observe(zone);
    ro.observe(hero);
  } else {
    window.addEventListener("resize", resize);
  }

  ensureSmokeFrame();

  return () => {
    stopSmokeFrame();
    unbindSmokeDocHidden();
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerdown", onPointerDown);
    window.removeEventListener("touchstart", onTouch);
    window.removeEventListener("touchmove", onTouch);
    if (io) io.disconnect();
    if (ro) ro.disconnect();
    else window.removeEventListener("resize", resize);
  };
}

export { configurarFumacaHero };
