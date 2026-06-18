// Máscara interativa do hero — efeito goo com blobs SVG que seguem o cursor
import { vincularDocumentoOculto } from "../utilitarios/geral.js";

const HERO_NS = "http://www.w3.org/2000/svg";
const NUM_AUTO_BLOBS_DESKTOP = 25;
const NUM_AUTO_BLOBS_MOBILE = 10;
const HERO_BLOB_SIZE = 140;
const HERO_BLOB_MIN = 72;
const HERO_BLOB_MAX = 192;
const HERO_PARALLAX = 3;
const HERO_BASE_IMAGE_RATIO = 511 / 458;
const HERO_REVEAL_IMAGE_RATIO = 472 / 529;
const HERO_BASE_VISIBLE_TOP_RATIO = 65 / 458;
const HERO_REVEAL_VISIBLE_TOP_RATIO = 19 / 529;
const HERO_REVEAL_HEIGHT_RATIO = 0.6;
const HERO_CURSOR_BLOB_SCALE = 1.12;
const HERO_AUTO_BLOB_SCALE = 1.12;
const HERO_CURSOR_ORGANIC_OFFSET = 0.16;
const HERO_MOBILE_REVEAL_HEIGHT_RATIO = 0.61;
const HERO_TABLET_REVEAL_HEIGHT_RATIO = 0.6;
const HERO_MOBILE_REVEAL_TOP_OFFSET_RATIO = 0.012;
const HERO_TABLET_REVEAL_TOP_OFFSET_RATIO = 0.006;
const HERO_TABLET_PARALLAX_FACTOR = 0.88;
const HERO_MOBILE_PARALLAX_FACTOR = 0.72;
const HERO_MOBILE_BLOB_FACTOR = 0.78;
const HERO_TABLET_BLOB_FACTOR = 0.9;

function criarMola2D(stiffness, damping) {
  let x = 0;
  let y = 0;
  let vx = 0;
  let vy = 0;
  return {
    reset(px, py) {
      x = px;
      y = py;
      vx = 0;
      vy = 0;
    },
    step(tx, ty, dt) {
      const ax = (tx - x) * stiffness - vx * damping;
      const ay = (ty - y) * stiffness - vy * damping;
      vx += ax * dt;
      vy += ay * dt;
      x += vx * dt;
      y += vy * dt;
      return { x, y };
    },
  };
}

/**
 * Safari (macOS), iOS e iPadOS usam composiÃ§Ã£o WebKit onde
 * O fallback por gradientes radiais no CSS Ã© estÃ¡vel e fluido nos mesmos browsers.
 */
function prefereMascaraGradienteHero() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const maxTouch = typeof navigator.maxTouchPoints === "number" ? navigator.maxTouchPoints : 0;
  const isClassicIOS = /iP(ad|hone|od)/i.test(ua);
  const isIPadOSLike = /Macintosh/i.test(ua) && maxTouch > 1;
  if (isClassicIOS || isIPadOSLike) return true;
  const isDesktopSafari = /Safari/i.test(ua) && !/(Chrome|CriOS|Chromium|Edg|OPR|Android)/i.test(ua);
  return Boolean(isDesktopSafari);
}

function obterCaixaContain(containerWidth, containerHeight, assetRatio) {
  const containerRatio = containerWidth / Math.max(1, containerHeight);

  if (containerRatio > assetRatio) {
    const height = containerHeight;
    const width = height * assetRatio;
    return {
      width,
      height,
      x: (containerWidth - width) * 0.5,
      y: 0,
    };
  }

  const width = containerWidth;
  const height = width / assetRatio;
  return {
    width,
    height,
    x: 0,
    y: containerHeight - height,
  };
}

function configurarMascaraHero(movimentoReduzido) {
  const stage = document.getElementById("hero-stage");
  const base = document.getElementById("hero-base");
  const reveal = document.getElementById("hero-reveal");
  const maskEl = document.getElementById("hero-blob-mask");
  const blobRoot = document.getElementById("hero-mask-blobs");
  if (!stage || !base || !reveal || !maskEl || !blobRoot) return () => {};

  const mqDesktop = window.matchMedia("(min-width: 1024px)");
  const mqTablet = window.matchMedia("(min-width: 768px)");
  const mqNarrow = window.matchMedia("(max-width: 420px)");
  const heroSection = document.getElementById("hero");
  const lockBtn = document.getElementById("hero-mask-scroll-lock");
  const lockLabel = lockBtn?.querySelector(".hero-mask-lock__text");

  if (movimentoReduzido) {
    reveal.style.maskImage = "none";
    reveal.style.webkitMaskImage = "none";
    reveal.style.opacity = "0.88";
    return () => {};
  }

  const hasCssSupports = typeof CSS !== "undefined" && typeof CSS.supports === "function";
  const supportsSvgMask = hasCssSupports
    && (
      CSS.supports("mask-image", "url('#hero-blob-mask')")
      || CSS.supports("-webkit-mask-image", "url('#hero-blob-mask')")
    );
  const supportsGradientMask = hasCssSupports
    && (
      CSS.supports("mask-image", "radial-gradient(circle at 50% 50%, #000 40%, transparent 41%)")
      || CSS.supports("-webkit-mask-image", "radial-gradient(circle at 50% 50%, #000 40%, transparent 41%)")
    );
  const prefersCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const preferGradientMask = prefersCoarsePointer || prefereMascaraGradienteHero();

  // Gradient-mask: estÃ¡vel no WebKit (Safari / iOS / iPadOS). SVG+goo fica para motores Chromium no desktop.
  const maskMode = preferGradientMask && supportsGradientMask
    ? "gradient"
    : supportsSvgMask
      ? "svg"
      : supportsGradientMask
        ? "gradient"
        : "clip";

  const setMaskImageValue = (value) => {
    reveal.style.maskImage = value;
    reveal.style.webkitMaskImage = value;
  };

  reveal.style.maskRepeat = "no-repeat";
  reveal.style.webkitMaskRepeat = "no-repeat";
  reveal.style.maskSize = "100% 100%";
  reveal.style.webkitMaskSize = "100% 100%";
  reveal.style.maskPosition = "0 0";
  reveal.style.webkitMaskPosition = "0 0";
  reveal.style.mask = "none";
  reveal.style.webkitMask = "none";

  if (maskMode === "svg") {
    setMaskImageValue("url('#hero-blob-mask')");
    reveal.style.mask = "url('#hero-blob-mask') no-repeat 0 0 / 100% 100%";
    reveal.style.webkitMask = "url('#hero-blob-mask') no-repeat 0 0 / 100% 100%";
  } else if (maskMode === "gradient") {
    setMaskImageValue("none");
    reveal.style.mask = "none";
    reveal.style.webkitMask = "none";
  } else {
    setMaskImageValue("none");
    reveal.style.mask = "none";
    reveal.style.webkitMask = "none";
    reveal.style.clipPath = "circle(22% at 50% 50%)";
  }

  let parallaxStrength = HERO_PARALLAX;
  let blobSize = HERO_BLOB_SIZE;
  let wobbleR = blobSize * 0.35;
  let revealHeightRatio = HERO_REVEAL_HEIGHT_RATIO;
  let revealTopOffsetRatio = 0;

  const head = criarMola2D(250, 30);
  const body1 = criarMola2D(220, 34);
  const body2 = criarMola2D(190, 38);
  const ratioSpring = criarMola2D(300, 40);

  let ratioTx = 0;
  let ratioTy = 0;
  let mouseTx = 0;
  let mouseTy = 0;
  let isInside = false;
  let activePointerId = null;
  let scrollLocked = false;
  let savedScrollY = 0;
  let lastStageW = -1;
  let lastStageH = -1;
  let layoutRaf = 0;
  let heroInView = true;
  let scrollSyncRaf = 0;

  const useSvgMaskDom = maskMode === "svg";
  const cursorG = useSvgMaskDom ? document.createElementNS(HERO_NS, "g") : null;
  const autoG = useSvgMaskDom ? document.createElementNS(HERO_NS, "g") : null;
  if (cursorG) {
    cursorG.setAttribute("id", "hero-cursor-blobs");
    blobRoot.appendChild(cursorG);
  }
  if (autoG) blobRoot.appendChild(autoG);

  const mkCircle = (parent, r) => {
    const c = document.createElementNS(HERO_NS, "circle");
    c.setAttribute("r", String(r));
    c.setAttribute("fill", "white");
    parent.appendChild(c);
    return c;
  };

  const setCircleRadius = (circle, radius) => {
    circle.setAttribute("r", String(radius));
  };

  const updateResponsiveHeroTuning = (stageRect) => {
    const width = stageRect.width;
    if (mqDesktop.matches) {
      revealHeightRatio = HERO_REVEAL_HEIGHT_RATIO;
      revealTopOffsetRatio = 0;
      parallaxStrength = HERO_PARALLAX;
      return 1;
    }
    if (mqTablet.matches) {
      revealHeightRatio = HERO_TABLET_REVEAL_HEIGHT_RATIO;
      revealTopOffsetRatio = HERO_TABLET_REVEAL_TOP_OFFSET_RATIO;
      parallaxStrength = HERO_PARALLAX * HERO_TABLET_PARALLAX_FACTOR;
      return HERO_TABLET_BLOB_FACTOR;
    }
    revealHeightRatio = HERO_MOBILE_REVEAL_HEIGHT_RATIO;
    revealTopOffsetRatio = HERO_MOBILE_REVEAL_TOP_OFFSET_RATIO;
    parallaxStrength = HERO_PARALLAX * HERO_MOBILE_PARALLAX_FACTOR;
    return width < 420 ? HERO_MOBILE_BLOB_FACTOR * 0.92 : HERO_MOBILE_BLOB_FACTOR;
  };

  const syncRevealFrame = () => {
    const stageRect = stage.getBoundingClientRect();
    const baseBox = obterCaixaContain(stageRect.width, stageRect.height, HERO_BASE_IMAGE_RATIO);
    const revealHeight = baseBox.height * revealHeightRatio;
    const revealWidth = revealHeight * HERO_REVEAL_IMAGE_RATIO;
    const revealLeft = baseBox.x + (baseBox.width - revealWidth) * 0.5;
    const revealTopRatio = HERO_BASE_VISIBLE_TOP_RATIO - HERO_REVEAL_VISIBLE_TOP_RATIO * revealHeightRatio;
    const revealTop = baseBox.y + baseBox.height * (revealTopRatio + revealTopOffsetRatio);

    reveal.style.setProperty("--hero-reveal-width", `${revealWidth}px`);
    reveal.style.setProperty("--hero-reveal-height", `${revealHeight}px`);
    reveal.style.setProperty("--hero-reveal-left", `${revealLeft}px`);
    reveal.style.setProperty("--hero-reveal-top", `${revealTop}px`);
  };

  const updateBlobScale = () => {
    const revealRect = reveal.getBoundingClientRect();
    const referenceSize = Math.max(1, Math.min(revealRect.width, revealRect.height));
    blobSize = gsap.utils.clamp(HERO_BLOB_MIN, HERO_BLOB_MAX, referenceSize * 0.22);
    wobbleR = blobSize * 0.35;
  };

  syncRevealFrame();
  updateBlobScale();

  const rSat = () => blobSize * 0.6;
  const rHead = () => blobSize * 0.8;
  const rB1 = () => blobSize * 0.6;
  const rB2 = () => blobSize * 0.45;

  const cSat = cursorG ? mkCircle(cursorG, rSat() * HERO_CURSOR_BLOB_SCALE) : null;
  const cHead = cursorG ? mkCircle(cursorG, rHead() * HERO_CURSOR_BLOB_SCALE) : null;
  const cBody1 = cursorG ? mkCircle(cursorG, rB1() * HERO_CURSOR_BLOB_SCALE) : null;
  const cBody2 = cursorG ? mkCircle(cursorG, rB2() * HERO_CURSOR_BLOB_SCALE) : null;
  const cTemple = cursorG ? mkCircle(cursorG, rB2() * 0.72 * HERO_CURSOR_BLOB_SCALE) : null;
  const cJaw = cursorG ? mkCircle(cursorG, rB2() * 0.58 * HERO_CURSOR_BLOB_SCALE) : null;

  const autoState = [];
  const autoBlobCount = mqDesktop.matches ? NUM_AUTO_BLOBS_DESKTOP : NUM_AUTO_BLOBS_MOBILE;
  for (let i = 0; i < autoBlobCount; i += 1) {
    autoState.push({
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
      speedX: 0.0005 + Math.random() * 0.0005,
      speedY: 0.0003 + Math.random() * 0.0005,
      sat: autoG ? mkCircle(autoG, rSat() * HERO_AUTO_BLOB_SCALE) : null,
      mainL: autoG ? mkCircle(autoG, rHead() * HERO_AUTO_BLOB_SCALE) : null,
      mainS: autoG ? mkCircle(autoG, rB2() * HERO_AUTO_BLOB_SCALE) : null,
    });
  }

  const syncMaskExtents = () => {
    const w = Math.max(1, Math.ceil(reveal.getBoundingClientRect().width));
    const h = Math.max(1, Math.ceil(reveal.getBoundingClientRect().height));
    maskEl.setAttribute("x", "0");
    maskEl.setAttribute("y", "0");
    maskEl.setAttribute("width", String(w));
    maskEl.setAttribute("height", String(h));
  };

  const updatePointerTarget = (clientX, clientY) => {
    const cRect = stage.getBoundingClientRect();
    isInside =
      clientX >= cRect.left &&
      clientX <= cRect.right &&
      clientY >= cRect.top &&
      clientY <= cRect.bottom;

    if (!isInside) {
      ratioTx = 0;
      ratioTy = 0;
      mouseTx = cRect.width * 0.5;
      mouseTy = cRect.height * 0.5;
      return;
    }

    const x = clientX - cRect.left;
    const y = clientY - cRect.top;
    mouseTx = x;
    mouseTy = y;
    ratioTx = (x / cRect.width) * 2 - 1;
    ratioTy = (y / cRect.height) * 2 - 1;
  };

  const onMove = (e) => {
    updatePointerTarget(e.clientX, e.clientY);
  };

  const onPointerDown = (e) => {
    if (e.pointerType === "mouse") return;
    activePointerId = e.pointerId;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {
      /* ignore */
    }
    updatePointerTarget(e.clientX, e.clientY);
  };

  const onPointerMove = (e) => {
    if (e.pointerType === "mouse") return;
    if (activePointerId !== null && e.pointerId !== activePointerId) return;
    updatePointerTarget(e.clientX, e.clientY);
  };

  const onPointerUp = (e) => {
    if (e.pointerType === "mouse") return;
    if (activePointerId !== null && e.pointerId !== activePointerId) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {
      /* ignore */
    }
    activePointerId = null;
    isInside = false;
    ratioTx = 0;
    ratioTy = 0;
  };

  const onTouchStart = (e) => {
    const touch = e.touches && e.touches[0];
    if (!touch) return;
    updatePointerTarget(touch.clientX, touch.clientY);
  };

  const onTouchMove = (e) => {
    const touch = e.touches && e.touches[0];
    if (!touch) return;
    updatePointerTarget(touch.clientX, touch.clientY);
  };

  const onTouchEnd = () => {
    isInside = false;
    ratioTx = 0;
    ratioTy = 0;
    activePointerId = null;
  };

  let raf = 0;
  let prevMs = performance.now();
  let lastGradientMask = "";
  let gradientFrameSkip = 0;
  const tick = (tMs) => {
    const dt = Math.min(0.045, Math.max(1 / 240, (tMs - prevMs) / 1000));
    prevMs = tMs;

    if (!heroInView || document.hidden) {
      raf = 0;
      return;
    }

    const cRect = stage.getBoundingClientRect();
    const rRect = reveal.getBoundingClientRect();
    const ox = rRect.left - cRect.left;
    const oy = rRect.top - cRect.top;
    const cw = cRect.width;
    const ch = cRect.height;

    if (!isInside && !mqDesktop.matches) {
      const driftTime = tMs * 0.00045;
      ratioTx = Math.sin(driftTime) * 0.18;
      ratioTy = Math.cos(driftTime * 1.22) * 0.14;
      mouseTx = cw * (0.5 + Math.sin(driftTime * 1.35) * 0.12);
      mouseTy = ch * (0.5 + Math.cos(driftTime * 1.08) * 0.1);
    }

    const rs = ratioSpring.step(ratioTx, ratioTy, dt);
    const baseX = rs.x * parallaxStrength;
    const baseY = rs.y * parallaxStrength;
    const revX = rs.x * parallaxStrength * 2;
    const revY = rs.y * parallaxStrength * 2;
    gsap.set(base, { x: baseX, y: baseY, force3D: true });
    gsap.set(reveal, { x: revX, y: revY, force3D: true });

    const headP = head.step(mouseTx, mouseTy, dt);
    const b1 = body1.step(mouseTx, mouseTy, dt);
    const b2 = body2.step(mouseTx, mouseTy, dt);
    const t = tMs * 0.002;
    const satX = headP.x + Math.sin(t) * wobbleR;
    const satY = headP.y + Math.cos(t) * wobbleR;

    const toLocal = (mx, my) => ({ x: mx - ox, y: my - oy });

    const shouldShowCursorBlob = isInside || !mqDesktop.matches;

    const p0 = toLocal(satX, satY);
    const p1 = toLocal(headP.x, headP.y);
    const p2 = toLocal(b1.x, b1.y);
    const p3 = toLocal(b2.x, b2.y);

    if (shouldShowCursorBlob && cursorG) {
      cursorG.setAttribute("opacity", "1");
      const organicOffsetScale = mqDesktop.matches ? 1 : mqTablet.matches ? 0.9 : 0.78;
      const organicOffsetX = blobSize * HERO_CURSOR_ORGANIC_OFFSET * organicOffsetScale;
      const organicOffsetY = blobSize * (HERO_CURSOR_ORGANIC_OFFSET * 0.85) * organicOffsetScale;
      cSat?.setAttribute("cx", String(p0.x));
      cSat?.setAttribute("cy", String(p0.y));
      cHead?.setAttribute("cx", String(p1.x));
      cHead?.setAttribute("cy", String(p1.y));
      cBody1?.setAttribute("cx", String(p2.x));
      cBody1?.setAttribute("cy", String(p2.y));
      cBody2?.setAttribute("cx", String(p3.x));
      cBody2?.setAttribute("cy", String(p3.y));
      cTemple?.setAttribute("cx", String(p1.x + organicOffsetX));
      cTemple?.setAttribute("cy", String(p1.y - organicOffsetY));
      cJaw?.setAttribute("cx", String(p3.x - organicOffsetX * 0.6));
      cJaw?.setAttribute("cy", String(p3.y + organicOffsetY * 0.9));
    } else if (cursorG) {
      cursorG.setAttribute("opacity", "0");
    }

    const autoSatRadius = blobSize * (mqDesktop.matches ? 0.35 : mqTablet.matches ? 0.3 : 0.24);
    const gradientLayers = [];
    if (maskMode === "gradient" && shouldShowCursorBlob) {
      const organicOffsetScale = mqDesktop.matches ? 1 : mqTablet.matches ? 0.9 : 0.78;
      const organicOffsetX = blobSize * HERO_CURSOR_ORGANIC_OFFSET * organicOffsetScale;
      const organicOffsetY = blobSize * (HERO_CURSOR_ORGANIC_OFFSET * 0.85) * organicOffsetScale;
      const pushLayer = (radius, x, y) => {
        gradientLayers.push(
          `radial-gradient(circle ${Math.max(8, radius).toFixed(1)}px at ${x.toFixed(1)}px ${y.toFixed(1)}px, #000 98%, transparent 100%)`,
        );
      };
      pushLayer(rSat() * HERO_CURSOR_BLOB_SCALE, p0.x, p0.y);
      pushLayer(rHead() * HERO_CURSOR_BLOB_SCALE, p1.x, p1.y);
      pushLayer(rB1() * HERO_CURSOR_BLOB_SCALE, p2.x, p2.y);
      pushLayer(rB2() * HERO_CURSOR_BLOB_SCALE, p3.x, p3.y);
      pushLayer(rB2() * 0.72 * HERO_CURSOR_BLOB_SCALE, p1.x + organicOffsetX, p1.y - organicOffsetY);
      pushLayer(rB2() * 0.58 * HERO_CURSOR_BLOB_SCALE, p3.x - organicOffsetX * 0.6, p3.y + organicOffsetY * 0.9);
    }
    autoState.forEach((b) => {
      const mainX = ((Math.sin(tMs * b.speedX + b.phaseX) + 1) / 2) * cw;
      const mainY = ((Math.cos(tMs * b.speedY + b.phaseY) + 1) / 2) * ch;
      const sx = mainX + Math.sin(tMs * 0.002 + b.phaseX) * autoSatRadius;
      const sy = mainY + Math.cos(tMs * 0.002 + b.phaseY) * autoSatRadius;
      const ps = toLocal(sx, sy);
      const pm = toLocal(mainX, mainY);
      if (maskMode === "svg") {
        b.sat?.setAttribute("cx", String(ps.x));
        b.sat?.setAttribute("cy", String(ps.y));
        b.mainL?.setAttribute("cx", String(pm.x));
        b.mainL?.setAttribute("cy", String(pm.y));
        b.mainS?.setAttribute("cx", String(pm.x));
        b.mainS?.setAttribute("cy", String(pm.y));
      } else if (maskMode === "gradient" && gradientLayers.length < 18) {
        gradientLayers.push(
          `radial-gradient(circle ${Math.max(6, rHead() * 0.45).toFixed(1)}px at ${pm.x.toFixed(1)}px ${pm.y.toFixed(1)}px, #000 97%, transparent 100%)`,
        );
      }
    });

    if (maskMode === "gradient") {
      const maskValue = gradientLayers.length ? gradientLayers.join(",") : "none";
      if (maskValue !== lastGradientMask) {
        if (prefersCoarsePointer) {
          gradientFrameSkip += 1;
          if (gradientFrameSkip % 2 === 0) {
            lastGradientMask = maskValue;
            setMaskImageValue(maskValue);
          }
        } else {
          lastGradientMask = maskValue;
          setMaskImageValue(maskValue);
        }
      }
    } else if (maskMode === "clip") {
      const clipRadius = Math.max(36, blobSize * 0.9);
      reveal.style.clipPath = `circle(${clipRadius.toFixed(1)}px at ${p1.x.toFixed(1)}px ${p1.y.toFixed(1)}px)`;
    }

    raf = requestAnimationFrame(tick);
  };

  const ensureHeroTick = () => {
    if (!raf && heroInView && !document.hidden) raf = requestAnimationFrame(tick);
  };
  const stopHeroTick = () => {
    if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };

  const onResize = () => {
    lastGradientMask = "";
    const cRect = stage.getBoundingClientRect();
    const blobFactor = updateResponsiveHeroTuning(cRect);
    mouseTx = cRect.width * 0.5;
    mouseTy = cRect.height * 0.5;
    syncRevealFrame();
    updateBlobScale();
    blobSize *= blobFactor;
    wobbleR = blobSize * 0.35;
    if (cSat) setCircleRadius(cSat, rSat() * HERO_CURSOR_BLOB_SCALE);
    if (cHead) setCircleRadius(cHead, rHead() * HERO_CURSOR_BLOB_SCALE);
    if (cBody1) setCircleRadius(cBody1, rB1() * HERO_CURSOR_BLOB_SCALE);
    if (cBody2) setCircleRadius(cBody2, rB2() * HERO_CURSOR_BLOB_SCALE);
    if (cTemple) setCircleRadius(cTemple, rB2() * 0.72 * HERO_CURSOR_BLOB_SCALE);
    if (cJaw) setCircleRadius(cJaw, rB2() * 0.58 * HERO_CURSOR_BLOB_SCALE);
    autoState.forEach((blob) => {
      if (blob.sat) setCircleRadius(blob.sat, rSat() * HERO_AUTO_BLOB_SCALE);
      if (blob.mainL) setCircleRadius(blob.mainL, rHead() * HERO_AUTO_BLOB_SCALE);
      if (blob.mainS) setCircleRadius(blob.mainS, rB2() * HERO_AUTO_BLOB_SCALE);
    });
    head.reset(mouseTx, mouseTy);
    body1.reset(mouseTx, mouseTy);
    body2.reset(mouseTx, mouseTy);
    ratioSpring.reset(0, 0);
    syncMaskExtents();
    lastStageW = cRect.width;
    lastStageH = cRect.height;
  };

  const scheduleLayout = () => {
    if (layoutRaf) return;
    layoutRaf = requestAnimationFrame(() => {
      layoutRaf = 0;
      refreshHeroLayout();
    });
  };

  const refreshHeroLayout = () => {
    const r = stage.getBoundingClientRect();
    const w = r.width;
    const h = r.height;
    if (lastStageW < 0) {
      onResize();
      return;
    }
    if (Math.abs(w - lastStageW) > 0.5 || Math.abs(h - lastStageH) > 0.5) {
      onResize();
    }
  };

  const getLockButtonText = (locked) => {
    if (mqNarrow.matches) return locked ? "Destravar" : "Travar";
    return locked ? "Destravar scroll" : "Travar scroll";
  };

  const syncLockButtonUi = (locked) => {
    if (lockBtn) {
      lockBtn.setAttribute("aria-pressed", locked ? "true" : "false");
      if (lockLabel) {
        lockLabel.textContent = getLockButtonText(locked);
      }
      lockBtn.setAttribute(
        "aria-label",
        locked
          ? "Destravar o scroll da página"
          : "Travar o scroll da página para mover a máscara com precisão",
      );
    }
  };

  const setScrollLocked = (locked) => {
    if (locked && document.body.classList.contains("menu-open")) return;
    scrollLocked = locked;
    syncLockButtonUi(locked);
    document.body.classList.toggle("hero-scroll-locked", locked);
    if (locked) {
      savedScrollY = window.scrollY || window.pageYOffset || 0;
      document.body.style.position = "fixed";
      document.body.style.top = `-${savedScrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, savedScrollY);
    }
    requestAnimationFrame(() => {
      scheduleLayout();
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    });
  };

  const onLockToggle = () => {
    setScrollLocked(!scrollLocked);
  };

  const onWinScrollSync = () => {
    if (scrollLocked) return;
    if (scrollSyncRaf) return;
    scrollSyncRaf = requestAnimationFrame(() => {
      scrollSyncRaf = 0;
      scheduleLayout();
    });
  };

  const onEscapeUnlock = (event) => {
    if (event.key === "Escape" && scrollLocked) {
      setScrollLocked(false);
    }
  };

  const onNavClickUnlock = (event) => {
    const anchor = event.target.closest ? event.target.closest("a[href^='#']") : null;
    if (anchor && scrollLocked) {
      setScrollLocked(false);
    }
  };

  const onNarrowChange = () => {
    syncLockButtonUi(scrollLocked);
  };

  const onOrientationChange = () => {
    scheduleLayout();
    requestAnimationFrame(() => scheduleLayout());
  };

  let heroResizeObserver = null;
  if (typeof ResizeObserver !== "undefined") {
    heroResizeObserver = new ResizeObserver(() => scheduleLayout());
    heroResizeObserver.observe(stage);
  }

  const vv = window.visualViewport;
  const onVisualViewportChange = () => scheduleLayout();
  if (vv) {
    vv.addEventListener("resize", onVisualViewportChange);
    vv.addEventListener("scroll", onVisualViewportChange);
  }

  let heroVisibilityObserver = null;
  if (heroSection && typeof IntersectionObserver !== "undefined") {
    heroVisibilityObserver = new IntersectionObserver(
      (entries) => {
        const en = entries[0];
        heroInView = Boolean(en && en.isIntersecting);
        if (heroInView) {
          lastGradientMask = "";
          scheduleLayout();
          ensureHeroTick();
        } else {
          stopHeroTick();
        }
      },
      { threshold: 0, rootMargin: "60px 0px" },
    );
    heroVisibilityObserver.observe(heroSection);
  }

  const unbindHeroDocHidden = vincularDocumentoOculto((hidden) => {
    if (hidden) stopHeroTick();
    else ensureHeroTick();
  });

  window.addEventListener("mousemove", onMove);
  if (typeof PointerEvent !== "undefined") {
    stage.addEventListener("pointerdown", onPointerDown, { passive: true });
    stage.addEventListener("pointermove", onPointerMove, { passive: true });
    stage.addEventListener("pointerup", onPointerUp, { passive: true });
    stage.addEventListener("pointercancel", onPointerUp, { passive: true });
  } else {
    stage.addEventListener("touchstart", onTouchStart, { passive: true });
    stage.addEventListener("touchmove", onTouchMove, { passive: true });
    stage.addEventListener("touchend", onTouchEnd, { passive: true });
    stage.addEventListener("touchcancel", onTouchEnd, { passive: true });
  }
  window.addEventListener("resize", scheduleLayout);
  window.addEventListener("scroll", onWinScrollSync, { passive: true });
  window.addEventListener("orientationchange", onOrientationChange);
  document.addEventListener("keydown", onEscapeUnlock);
  document.addEventListener("click", onNavClickUnlock, true);
  if (typeof mqDesktop.addEventListener === "function") {
    mqDesktop.addEventListener("change", onResize);
    mqTablet.addEventListener("change", onResize);
    mqNarrow.addEventListener("change", onNarrowChange);
  } else {
    mqDesktop.addListener(onResize);
    mqTablet.addListener(onResize);
    mqNarrow.addListener(onNarrowChange);
  }
  if (lockBtn) {
    lockBtn.addEventListener("click", onLockToggle);
  }
  syncLockButtonUi(false);
  onResize();
  ensureHeroTick();

  return () => {
    stopHeroTick();
    unbindHeroDocHidden();
    if (layoutRaf) cancelAnimationFrame(layoutRaf);
    if (scrollSyncRaf) cancelAnimationFrame(scrollSyncRaf);
    if (scrollLocked) setScrollLocked(false);
    heroResizeObserver?.disconnect();
    if (vv) {
      vv.removeEventListener("resize", onVisualViewportChange);
      vv.removeEventListener("scroll", onVisualViewportChange);
    }
    window.removeEventListener("scroll", onWinScrollSync);
    window.removeEventListener("orientationchange", onOrientationChange);
    document.removeEventListener("keydown", onEscapeUnlock);
    document.removeEventListener("click", onNavClickUnlock, true);
    heroVisibilityObserver?.disconnect();
    lockBtn?.removeEventListener("click", onLockToggle);
    window.removeEventListener("mousemove", onMove);
    if (typeof PointerEvent !== "undefined") {
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerup", onPointerUp);
      stage.removeEventListener("pointercancel", onPointerUp);
    } else {
      stage.removeEventListener("touchstart", onTouchStart);
      stage.removeEventListener("touchmove", onTouchMove);
      stage.removeEventListener("touchend", onTouchEnd);
      stage.removeEventListener("touchcancel", onTouchEnd);
    }
    window.removeEventListener("resize", scheduleLayout);
    if (typeof mqDesktop.removeEventListener === "function") {
      mqDesktop.removeEventListener("change", onResize);
      mqTablet.removeEventListener("change", onResize);
      mqNarrow.removeEventListener("change", onNarrowChange);
    } else {
      mqDesktop.removeListener(onResize);
      mqTablet.removeListener(onResize);
      mqNarrow.removeListener(onNarrowChange);
    }
    cursorG?.remove();
    autoG?.remove();
    gsap.set([base, reveal], { clearProps: "transform" });
    reveal.style.removeProperty("mask-image");
    reveal.style.removeProperty("-webkit-mask-image");
    reveal.style.removeProperty("mask-repeat");
    reveal.style.removeProperty("-webkit-mask-repeat");
    reveal.style.removeProperty("mask-size");
    reveal.style.removeProperty("-webkit-mask-size");
    reveal.style.removeProperty("mask-position");
    reveal.style.removeProperty("-webkit-mask-position");
    reveal.style.removeProperty("mask");
    reveal.style.removeProperty("-webkit-mask");
    reveal.style.removeProperty("clip-path");
  };
}

export { configurarMascaraHero };
