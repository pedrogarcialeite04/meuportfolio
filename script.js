/**
 * Portfolio — página estática
 * Animações: GSAP + ScrollTrigger, Three.js (fundo), interações.
 */
/* global gsap, ScrollTrigger, THREE */

gsap.registerPlugin(ScrollTrigger);

// —— Dados ——
/** [nome, ano, papel, tags[], imagem de fundo, link] — freelances prestados */
const PROJECTS = [
  [
    "devero",
    "2026",
    "Freelance",
    ["Landing Page", "UI", "tailwindcss", "javascript", "html", "css", "gsap", "scrolltrigger"],
    "./assets/images/devero.jpeg",
    "./Devvero%20-%20Hire%20Global%20Developers,%20Or%20Become%20One%20-%20Google%20Chrome%202026-02-24%2009-43-32.mp4",
  ],
  [
    "fjstopografia",
    "2026",
    "Freelance",
    ["Site", "Responsividade Mobile", "javascript", "html", "css", "gsap", "scrolltrigger", "three.js", "full stack", "node.js", "mongodb"],
    "./assets/images/topografia.png",
    "https://www.fjstopografia.com.br/",
  ],
  [
    "convite de casamento",
    "2026",
    "Freelance",
    ["Design", "Front-end", "Back-end", "Full Stack", "node.js", "javascript", "three.js", "mongodb", "html", "css", "gsap", "scrolltrigger"],
    "./assets/images/valquiria.png",
    "https://github.com/pedrogarcialeite04/landingpage-casamento",
  ],
  [
    "landing page Theze",
    "2025",
    "Freelance",
    ["Landing Page", "javascript", "html", "css", "gsap", "scrolltrigger", "three.js"],
    "./assets/images/theze.png",
    "https://thezeagricola.netlify.app/",
  ],
  [
    "Posto",
    "2025",
    "completo",
    ["full stack", "node.js", "mongodb", "javascript"],
    "./assets/images/posto.png",
    "./video-posto.mp4",
  ],
  [
    "Sistema de Vendas",
    "2025",
    "Completo",
    ["full stack", "node.js", "mongodb", "javascript"],
    "./assets/images/venda.png",
    "./video-theze.mp4",
  ],
  [
    "pg flow",
    "2025",
    "completo",
    ["Landing Page", "front-end", "javascript", "gsap", "scrolltrigger"],
    "./assets/images/pgflow.png",
    "https://pgflow.vercel.app/",
  ],
  [
    "Registro de Gastos",
    "2025",
    "completo",
    ["full stack", "node.js", "mongodb", "javascript"],
    "./assets/images/robo.jpg",
    "https://registrospedro.netlify.app/",
  ],
  [
    "foco",
    "2026",
    "completo",
    ["full stack", "UI", "javascript", "gsap"],
    "./assets/images/foco.png",
    "https://foco-rotina.vercel.app/",
  ],
  [
    "Thegadu",
    "2026",
    "freelance",
    ["full stack", "node.js", "mongodb", "javascript"],
    "./assets/images/thegadu.png",
    "https://thegadu.onrender.com/entrada.html",
  ],
  [
    "Registros de Cheques",
    "2026",
    "freelance",
    ["full stack", "node.js", "mongodb", "javascript"],
    "./assets/images/cheques.png",
    "https://saa-s-cheques.vercel.app/",
  ],
];

/** Tags únicas dos freelances, ordem de aparição, com rótulos para o marquee */
const STACK_TAG_LABELS = {
  "landing page": "Landing Page",
  ui: "UI",
  tailwindcss: "Tailwind",
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  gsap: "GSAP",
  scrolltrigger: "ScrollTrigger",
  site: "Site",
  "responsividade mobile": "Mobile",
  "three.js": "Three.js",
  "full stack": "Full Stack",
  "node.js": "Node.js",
  mongodb: "MongoDB",
  design: "Design",
  "front-end": "Front-end",
  "back-end": "Back-end",
};

function buildStackFromFreelanceProjects() {
  const seen = new Set();
  const out = [];
  const push = (label, key) => {
    const k = key ?? String(label).trim().toLowerCase();
    if (!k || seen.has(k)) return;
    seen.add(k);
    out.push(label);
  };

  push("TypeScript", "typescript");
  push("React", "react");

  for (const [, , , tags] of PROJECTS) {
    for (const raw of tags || []) {
      const key = String(raw).trim().toLowerCase();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      out.push(STACK_TAG_LABELS[key] || String(raw).trim());
    }
  }
  return out;
}

const STACK = [
  "JavaScript",
  "CSS",
  "HTML",
  "GSAP",
  "ScrollTrigger",
  "Three.js",
  "Node.js",
  "MongoDB",
  "UI",
  "Performance",
];

const STACK_ICON_SLUG_BY_LABEL = {
  TypeScript: "typescript",
  React: "react",
  Tailwind: "tailwindcss",
  JavaScript: "javascript",
  HTML: "html5",
  CSS: "css",
  GSAP: "greensock",
  ScrollTrigger: "greensock",
  Site: "googlechrome",
  Mobile: "android",
  "Three.js": "threedotjs",
  "Full Stack": "stackblitz",
  "Node.js": "nodedotjs",
  MongoDB: "mongodb",
  Design: "figma",
  "Front-end": "frontendmentor",
  "Back-end": "serverless",
  UI: "storybook",
  "Landing Page": "googlechrome",
  Performance: "lighthouse",
};

const LAB_ITEMS = [
  ["Shader study", "2025"], ["Grid drift", "2025"], ["Type scale", "2024"], ["Noise UI", "2024"],
  ["Chrome", "2023"], ["Porcelain", "2024"], ["GIF", "2024"], ["Japan", "2024"],
  ["Dark Mode", "2024"], ["Beachball", "2023"], ["Season", "2021"], ["Silverstone", "2020"],
  ["Season", "2019"], ["Basketball", "2022"], ["Las Vegas", "2023"], ["Race", "2023"],
];

const TRAJETORIA_EXPANSION_MEDIA = {
  video: {
    src: "./videopg.mp4",
    poster: "",
    background: "./assets/images/imgfundo.jpeg",
    title: "Minha trajetória",
    date: "Front-end em evolução",
    scrollToExpand: "Role para ampliar",
    about: {
      overview:
        "Comecei focando em interfaces modernas e performáticas, evoluindo de landing pages para projetos mais completos, sempre priorizando experiência do usuário e qualidade visual.",
      conclusion:
        "Hoje transformo ideia em produto digital com atenção a detalhe, performance e motion, entregando experiências sólidas e prontas para escalar.",
    },
  },
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// —— 1. Menu: acessibilidade, scroll lock, burger GSAP, parallax galerias, hovers ——
function setupMenu(reduceMotion) {
  const btn = document.getElementById("menu-toggle");
  const overlay = document.getElementById("menu-overlay");
  const panel = document.getElementById("menu-panel");
  if (!btn || !overlay || !panel) return () => {};

  const parallaxGrid = panel.querySelector(".menu-grid-parallax");
  const closeOverlayBtn = document.getElementById("menu-overlay-close");
  const closeStrokes = closeOverlayBtn ? closeOverlayBtn.querySelectorAll(".close-stroke") : [];
  const navLinks = [...panel.querySelectorAll(".menu-main-link[href^='#']")];
  let isClosing = false;
  let enableActiveTracking = false;
  let scrollTicking = false;
  let lastScrollY = window.scrollY || 0;
  let logoHiddenAfterScroll = false;

  const setOpen = (open) => {
    btn.classList.toggle("open", open);
    overlay.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    overlay.setAttribute("aria-hidden", String(!open));
    if (open && closeOverlayBtn && !reduceMotion && typeof gsap !== "undefined") {
      gsap.set([overlay, panel], { clearProps: "transform,opacity" });
      gsap.killTweensOf(closeOverlayBtn);
      gsap.set(closeOverlayBtn, { clearProps: "transform" });
      gsap.set(closeStrokes, { strokeDashoffset: 18 });
      gsap.to(closeStrokes, {
        strokeDashoffset: 0,
        duration: 0.32,
        ease: "power2.out",
        stagger: 0.06,
      });
    }
    if (open) isClosing = false;
  };

  const finishCloseState = () => {
    overlay.classList.remove("closing");
    setOpen(false);
    isClosing = false;
  };

  const activateMenuLink = (hash) => {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === hash);
    });
  };

  const updateActiveFromViewport = () => {
    if (!enableActiveTracking || !navLinks.length) return;
    const viewportMid = window.innerHeight * 0.36;
    let bestHash = null;
    let bestDistance = Number.POSITIVE_INFINITY;

    navLinks.forEach((link) => {
      const hash = link.getAttribute("href");
      const section = hash ? document.querySelector(hash) : null;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - viewportMid);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestHash = hash;
      }
    });

    if (bestHash) activateMenuLink(bestHash);
  };

  const closeWithFx = () => {
    if (!overlay.classList.contains("open") || isClosing) return;
    if (reduceMotion || typeof gsap === "undefined" || !closeOverlayBtn) {
      finishCloseState();
      return;
    }

    isClosing = true;
    overlay.classList.add("closing");
    gsap.killTweensOf([closeOverlayBtn, closeStrokes, overlay, panel]);
    const tl = gsap.timeline({ onComplete: finishCloseState });

    tl.to(closeStrokes, {
      strokeDashoffset: 18,
      duration: 0.22,
      ease: "power2.inOut",
      stagger: 0.04,
    })
      .to(
        closeOverlayBtn,
        {
          scale: 0.88,
          rotation: 90,
          duration: 0.2,
          ease: "power2.inOut",
        },
        0,
      )
      .to(
        panel,
        {
          yPercent: -7,
          opacity: 0.7,
          duration: 0.44,
          ease: "power2.inOut",
        },
        0,
      )
      .to(
        overlay,
        {
          yPercent: -100,
          duration: 0.52,
          ease: "power3.inOut",
        },
        0.05,
      )
      .set([overlay, panel, closeOverlayBtn], { clearProps: "transform,opacity" });
  };

  const onToggle = () => setOpen(!overlay.classList.contains("open"));
  btn.addEventListener("click", onToggle);

  const scrollToHashTarget = (hash) => {
    if (!hash || !hash.startsWith("#")) return;
    const target = document.querySelector(hash);
    if (!target) return;
    const header = document.querySelector(".header");
    const headerOffset = header ? header.offsetHeight + 10 : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const onMenuLinkClick = (e) => {
    const link = e.currentTarget;
    const hash = link && link.getAttribute ? link.getAttribute("href") : null;
    enableActiveTracking = true;
    if (hash) {
      e.preventDefault();
      activateMenuLink(hash);
      scrollToHashTarget(hash);
    }
  };
  navLinks.forEach((link) => link.addEventListener("click", onMenuLinkClick));

  const onOverlayClose = (e) => {
    e.stopPropagation();
    closeWithFx();
  };
  if (closeOverlayBtn) closeOverlayBtn.addEventListener("click", onOverlayClose);

  const closeLinks = [...overlay.querySelectorAll("[data-menu-close]")];
  const onCloseLinkClick = () => closeWithFx();
  closeLinks.forEach((a) => a.addEventListener("click", onCloseLinkClick));

  const onKey = (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) {
      closeWithFx();
    }
  };
  window.addEventListener("keydown", onKey);

  const onScroll = () => {
    const y = window.scrollY || 0;
    if (y > 2) enableActiveTracking = true;
    if (y > 8) logoHiddenAfterScroll = true;

    document.body.classList.toggle("header-scrolled", y > 8);
    if (overlay.classList.contains("open")) {
      document.body.classList.remove("header-hide-logo");
    } else if (logoHiddenAfterScroll) {
      document.body.classList.add("header-hide-logo");
    } else {
      const scrollingDown = y > lastScrollY + 2;
      if (scrollingDown) document.body.classList.add("header-hide-logo");
    }
    lastScrollY = y;

    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      updateActiveFromViewport();
      scrollTicking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const moveAmount = 100;
  const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);

  const onMenuMove = (e) => {
    if (!parallaxGrid || reduceMotion) return;
    const rect = panel.getBoundingClientRect();
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    const cy = clamp(ny * 2, -1, 1);
    gsap.to(parallaxGrid, { y: -cy * moveAmount * 0.72, duration: 1.1, ease: "power2.out", overwrite: "auto" });
  };

  const resetGalleries = () => {
    if (!parallaxGrid || reduceMotion) return;
    gsap.to(parallaxGrid, { y: 0, duration: 0.75, ease: "power3.out" });
  };

  panel.addEventListener("mousemove", onMenuMove);
  panel.addEventListener("mouseleave", resetGalleries);

  return () => {
    btn.removeEventListener("click", onToggle);
    navLinks.forEach((link) => link.removeEventListener("click", onMenuLinkClick));
    closeLinks.forEach((a) => a.removeEventListener("click", onCloseLinkClick));
    if (closeOverlayBtn) closeOverlayBtn.removeEventListener("click", onOverlayClose);
    window.removeEventListener("keydown", onKey);
    window.removeEventListener("scroll", onScroll);
    document.body.classList.remove("header-scrolled", "header-hide-logo");
    panel.removeEventListener("mousemove", onMenuMove);
    panel.removeEventListener("mouseleave", resetGalleries);
  };
}

// —— 2. Hero: máscara SVG “goo” + blobs ——
const HERO_NS = "http://www.w3.org/2000/svg";
const NUM_AUTO_BLOBS = 25;
const HERO_BLOB_SIZE = 140;
const HERO_PARALLAX = 3;

function spring2DCreate(stiffness, damping) {
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

function setupHeroBlobMask(reduceMotion) {
  const stage = document.getElementById("hero-stage");
  const base = document.getElementById("hero-base");
  const reveal = document.getElementById("hero-reveal");
  const maskEl = document.getElementById("hero-blob-mask");
  const blobRoot = document.getElementById("hero-mask-blobs");
  if (!stage || !base || !reveal || !maskEl || !blobRoot) return () => {};

  const mqLg = window.matchMedia("(min-width: 1024px)");

  if (reduceMotion) {
    reveal.style.maskImage = "none";
    reveal.style.webkitMaskImage = "none";
    reveal.style.opacity = "0.88";
    return () => {};
  }

  const parallaxStrength = HERO_PARALLAX;
  const blobSize = HERO_BLOB_SIZE;
  const wobbleR = blobSize * 0.35;

  const head = spring2DCreate(250, 30);
  const body1 = spring2DCreate(220, 34);
  const body2 = spring2DCreate(190, 38);
  const ratioSpring = spring2DCreate(300, 40);

  let ratioTx = 0;
  let ratioTy = 0;
  let mouseTx = 0;
  let mouseTy = 0;
  let isInside = false;

  const cursorG = document.createElementNS(HERO_NS, "g");
  cursorG.setAttribute("id", "hero-cursor-blobs");
  const autoG = document.createElementNS(HERO_NS, "g");
  blobRoot.appendChild(cursorG);
  blobRoot.appendChild(autoG);

  const mkCircle = (parent, r) => {
    const c = document.createElementNS(HERO_NS, "circle");
    c.setAttribute("r", String(r));
    c.setAttribute("fill", "white");
    parent.appendChild(c);
    return c;
  };

  const rSat = blobSize * 0.6;
  const rHead = blobSize * 0.8;
  const rB1 = blobSize * 0.6;
  const rB2 = blobSize * 0.45;

  const cSat = mkCircle(cursorG, rSat);
  const cHead = mkCircle(cursorG, rHead);
  const cBody1 = mkCircle(cursorG, rB1);
  const cBody2 = mkCircle(cursorG, rB2);

  const autoState = [];
  for (let i = 0; i < NUM_AUTO_BLOBS; i += 1) {
    autoState.push({
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
      speedX: 0.0005 + Math.random() * 0.0005,
      speedY: 0.0003 + Math.random() * 0.0005,
      sat: mkCircle(autoG, rSat),
      mainL: mkCircle(autoG, rHead),
      mainS: mkCircle(autoG, rB2),
    });
  }

  const syncMaskExtents = () => {
    if (!mqLg.matches) return;
    const w = Math.max(1, Math.ceil(reveal.getBoundingClientRect().width));
    const h = Math.max(1, Math.ceil(reveal.getBoundingClientRect().height));
    maskEl.setAttribute("x", "0");
    maskEl.setAttribute("y", "0");
    maskEl.setAttribute("width", String(w));
    maskEl.setAttribute("height", String(h));
  };

  const onMove = (e) => {
    if (!mqLg.matches) return;

    const cRect = stage.getBoundingClientRect();
    isInside =
      e.clientX >= cRect.left &&
      e.clientX <= cRect.right &&
      e.clientY >= cRect.top &&
      e.clientY <= cRect.bottom;

    if (!isInside) {
      ratioTx = 0;
      ratioTy = 0;
      mouseTx = cRect.width * 0.5;
      mouseTy = cRect.height * 0.5;
      return;
    }

    const x = e.clientX - cRect.left;
    const y = e.clientY - cRect.top;
    mouseTx = x;
    mouseTy = y;
    ratioTx = (x / cRect.width) * 2 - 1;
    ratioTy = (y / cRect.height) * 2 - 1;
  };

  let raf = 0;
  let prevMs = performance.now();
  const tick = (tMs) => {
    const dt = Math.min(0.045, Math.max(1 / 240, (tMs - prevMs) / 1000));
    prevMs = tMs;
    if (!mqLg.matches) {
      raf = requestAnimationFrame(tick);
      return;
    }

    const cRect = stage.getBoundingClientRect();
    const rRect = reveal.getBoundingClientRect();
    const ox = rRect.left - cRect.left;
    const oy = rRect.top - cRect.top;
    const cw = cRect.width;
    const ch = cRect.height;

    const rs = ratioSpring.step(ratioTx, ratioTy, dt);
    const baseX = rs.x * parallaxStrength;
    const baseY = rs.y * parallaxStrength;
    const revX = rs.x * parallaxStrength * 2;
    const revY = rs.y * parallaxStrength * 2;
    gsap.set(base, { x: baseX, y: baseY, force3D: true });
    gsap.set(reveal, { x: revX, y: revY, force3D: true });

    syncMaskExtents();

    const headP = head.step(mouseTx, mouseTy, dt);
    const b1 = body1.step(mouseTx, mouseTy, dt);
    const b2 = body2.step(mouseTx, mouseTy, dt);
    const t = tMs * 0.002;
    const satX = headP.x + Math.sin(t) * wobbleR;
    const satY = headP.y + Math.cos(t) * wobbleR;

    const toLocal = (mx, my) => ({ x: mx - ox, y: my - oy });

    if (isInside) {
      cursorG.setAttribute("opacity", "1");
      const p0 = toLocal(satX, satY);
      const p1 = toLocal(headP.x, headP.y);
      const p2 = toLocal(b1.x, b1.y);
      const p3 = toLocal(b2.x, b2.y);
      cSat.setAttribute("cx", String(p0.x));
      cSat.setAttribute("cy", String(p0.y));
      cHead.setAttribute("cx", String(p1.x));
      cHead.setAttribute("cy", String(p1.y));
      cBody1.setAttribute("cx", String(p2.x));
      cBody1.setAttribute("cy", String(p2.y));
      cBody2.setAttribute("cx", String(p3.x));
      cBody2.setAttribute("cy", String(p3.y));
    } else {
      cursorG.setAttribute("opacity", "0");
    }

    const satRadius = blobSize * 0.35;
    autoState.forEach((b) => {
      const mainX = ((Math.sin(tMs * b.speedX + b.phaseX) + 1) / 2) * cw;
      const mainY = ((Math.cos(tMs * b.speedY + b.phaseY) + 1) / 2) * ch;
      const sx = mainX + Math.sin(tMs * 0.002 + b.phaseX) * satRadius;
      const sy = mainY + Math.cos(tMs * 0.002 + b.phaseY) * satRadius;
      const ps = toLocal(sx, sy);
      const pm = toLocal(mainX, mainY);
      b.sat.setAttribute("cx", String(ps.x));
      b.sat.setAttribute("cy", String(ps.y));
      b.mainL.setAttribute("cx", String(pm.x));
      b.mainL.setAttribute("cy", String(pm.y));
      b.mainS.setAttribute("cx", String(pm.x));
      b.mainS.setAttribute("cy", String(pm.y));
    });

    raf = requestAnimationFrame(tick);
  };

  const onResize = () => {
    const cRect = stage.getBoundingClientRect();
    mouseTx = cRect.width * 0.5;
    mouseTy = cRect.height * 0.5;
    if (!mqLg.matches) {
      gsap.set([base, reveal], { clearProps: "transform" });
      cursorG.setAttribute("opacity", "0");
      return;
    }
    head.reset(mouseTx, mouseTy);
    body1.reset(mouseTx, mouseTy);
    body2.reset(mouseTx, mouseTy);
    ratioSpring.reset(0, 0);
    syncMaskExtents();
  };

  window.addEventListener("mousemove", onMove);
  window.addEventListener("resize", onResize);
  if (typeof mqLg.addEventListener === "function") {
    mqLg.addEventListener("change", onResize);
  } else {
    mqLg.addListener(onResize);
  }
  onResize();
  raf = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("resize", onResize);
    if (typeof mqLg.removeEventListener === "function") {
      mqLg.removeEventListener("change", onResize);
    } else {
      mqLg.removeListener(onResize);
    }
    cursorG.remove();
    autoG.remove();
    gsap.set([base, reveal], { clearProps: "transform" });
  };
}

function setupHeroProfileCard(reduceMotion) {
  const card = document.getElementById("hero-profile-card");
  const hero = document.getElementById("hero");
  if (!card || !hero) return () => {};

  if (!reduceMotion) {
    gsap.from(card, {
      y: 26,
      autoAlpha: 0,
      duration: 0.82,
      delay: 0.16,
      ease: "power3.out",
    });
  }

  if (reduceMotion) return () => {};

  const rotateXTo = gsap.quickTo(card, "rotationX", { duration: 0.3, ease: "power3.out" });
  const rotateYTo = gsap.quickTo(card, "rotationY", { duration: 0.3, ease: "power3.out" });
  const xTo = gsap.quickTo(card, "x", { duration: 0.35, ease: "power3.out" });
  const yTo = gsap.quickTo(card, "y", { duration: 0.35, ease: "power3.out" });

  const onMove = (e) => {
    const rect = card.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateXTo(-py * 6);
    rotateYTo(px * 8);
    xTo(px * 4);
    yTo(py * 4);
  };

  const onLeave = () => {
    rotateXTo(0);
    rotateYTo(0);
    xTo(0);
    yTo(0);
  };

  hero.addEventListener("mousemove", onMove);
  hero.addEventListener("mouseleave", onLeave);

  return () => {
    hero.removeEventListener("mousemove", onMove);
    hero.removeEventListener("mouseleave", onLeave);
    gsap.set(card, { clearProps: "transform,opacity" });
  };
}

function setupPerspectiveHoverCards(reduceMotion) {
  const cards = Array.from(document.querySelectorAll(".js-tilt-card"));
  if (!cards.length) return () => {};

  const states = cards.map((card) => ({
    card,
    glare: card.querySelector(".footer-cta-glare"),
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    glareTargetX: 50,
    glareTargetY: 50,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
    active: false,
  }));

  const maxTiltX = 10;
  const maxTiltY = 10;
  const stiffness = 150;
  const damping = 20;
  let previousTime = performance.now();

  const onMoveFactory = (state) => (event) => {
    const rect = state.card.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const relX = (event.clientX - rect.left) / rect.width;
    const relY = (event.clientY - rect.top) / rect.height;
    const nx = Math.max(-1, Math.min(1, relX * 2 - 1));
    const ny = Math.max(-1, Math.min(1, relY * 2 - 1));

    state.targetX = nx;
    state.targetY = ny;
    state.glareTargetX = relX * 100;
    state.glareTargetY = relY * 100;
    state.active = true;
  };

  const onLeaveFactory = (state) => () => {
    state.targetX = 0;
    state.targetY = 0;
    state.glareTargetX = 50;
    state.glareTargetY = 50;
    state.active = false;
  };

  states.forEach((state) => {
    state.onMove = onMoveFactory(state);
    state.onLeave = onLeaveFactory(state);
    state.card.addEventListener("mousemove", state.onMove);
    state.card.addEventListener("mouseleave", state.onLeave);
  });

  if (reduceMotion) {
    return () => {
      states.forEach((state) => {
        state.card.removeEventListener("mousemove", state.onMove);
        state.card.removeEventListener("mouseleave", state.onLeave);
      });
    };
  }

  const tick = () => {
    const now = performance.now();
    const dt = Math.min(0.034, (now - previousTime) / 1000);
    previousTime = now;
    const smoothing = Math.min(1, 0.12 * gsap.ticker.deltaRatio(60));

    states.forEach((state) => {
      const forceX = stiffness * (state.targetX - state.currentX);
      const forceY = stiffness * (state.targetY - state.currentY);

      state.velocityX += (forceX - damping * state.velocityX) * dt;
      state.velocityY += (forceY - damping * state.velocityY) * dt;
      state.currentX += state.velocityX * dt;
      state.currentY += state.velocityY * dt;

      const rotateX = -state.currentY * maxTiltX;
      const rotateY = state.currentX * maxTiltY;

      state.glareX += (state.glareTargetX - state.glareX) * smoothing;
      state.glareY += (state.glareTargetY - state.glareY) * smoothing;
      state.glareOpacity += ((state.active ? 0.85 : 0) - state.glareOpacity) * smoothing;

      state.card.style.transform = `rotateX(${rotateX.toFixed(3)}deg) rotateY(${rotateY.toFixed(3)}deg)`;

      if (state.glare) {
        state.glare.style.setProperty("--glare-x", `${state.glareX.toFixed(2)}%`);
        state.glare.style.setProperty("--glare-y", `${state.glareY.toFixed(2)}%`);
        state.glare.style.opacity = state.glareOpacity.toFixed(3);
      }
    });
  };

  gsap.ticker.add(tick);

  return () => {
    gsap.ticker.remove(tick);
    states.forEach((state) => {
      state.card.removeEventListener("mousemove", state.onMove);
      state.card.removeEventListener("mouseleave", state.onLeave);
      state.card.style.removeProperty("transform");
      if (state.glare) {
        state.glare.style.removeProperty("--glare-x");
        state.glare.style.removeProperty("--glare-y");
        state.glare.style.removeProperty("opacity");
      }
    });
  };
}

function setupPageIntroOutro(reduceMotion) {
  const sections = gsap.utils.toArray("main > section");
  const header = document.querySelector(".header");
  if (reduceMotion || !sections.length) return () => {};

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from(header, { y: -36, autoAlpha: 0, duration: 0.72 }, 0);
  tl.from(sections[0], { y: 28, autoAlpha: 0.96, duration: 0.75 }, 0.08);

  return () => {
    tl.kill();
    if (header) gsap.set(header, { clearProps: "transform,opacity" });
  };
}

function setupScrollProgress(reduceMotion, depthState) {
  if (reduceMotion) return () => {};
  const st = ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 0.2,
    onUpdate: (self) => {
      const p = self.progress;
      document.documentElement.style.setProperty("--scroll", p.toFixed(4));
      if (depthState) {
        depthState.scrollDepth = p;
        const lab = document.getElementById("lab");
        if (lab) {
          const r = lab.getBoundingClientRect();
          const vh = window.innerHeight || 1;
          depthState.sectionMix = Math.max(0, Math.min(1, 1 - r.top / vh)) * 0.55;
        }
      }
    },
  });
  return () => {
    st.kill();
    document.documentElement.style.removeProperty("--scroll");
  };
}

function setupSectionScrollRails(reduceMotion) {
  if (reduceMotion) return () => {};
  const pairs = [
    ["scroll-rail-trajetoria", "trajetoria"],
  ];
  const triggers = pairs
    .map(([fillId, sectionId]) => {
      const fill = document.getElementById(fillId);
      const section = document.getElementById(sectionId);
      if (!fill || !section) return null;
      return ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        onUpdate: (self) => {
          gsap.set(fill, { scaleY: self.progress, transformOrigin: "top center" });
        },
      });
    })
    .filter(Boolean);
  return () => triggers.forEach((t) => t.kill());
}

function setupLayeredParallax(reduceMotion) {
  if (reduceMotion) return () => {};
  const sobre = document.getElementById("sobre");
  const podiums = sobre?.querySelector(".podiums");
  const perfilBody = sobre?.querySelector(".perfil-body");
  const cleanups = [];

  if (sobre && podiums && perfilBody) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sobre,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.7,
      },
    });
    tl.fromTo(podiums, { y: 12 }, { y: -18, ease: "none" }, 0);
    tl.fromTo(perfilBody, { y: 0 }, { y: 28, ease: "none" }, 0);
    cleanups.push(() => {
      tl.scrollTrigger?.kill();
      tl.kill();
    });
  }

  return () => cleanups.forEach((fn) => fn());
}

function setupPanelStack(reduceMotion) {
  if (reduceMotion) return () => {};
  if (!document.getElementById("main-content")) return () => {};

  const mm = ScrollTrigger.matchMedia({
    "(min-width: 1024px)": () => {
      document.body.classList.add("panel-stack-active");
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => {
        document.body.classList.remove("panel-stack-active");
        requestAnimationFrame(() => ScrollTrigger.refresh());
      };
    },
  });

  return () => mm.revert();
}

function setupStackPin(reduceMotion) {
  if (reduceMotion) return () => {};
  const section = document.getElementById("stack");
  const inner = section?.querySelector(".stack-pin-inner");
  if (!section || !inner) return () => {};

  /**
   * Pin + painéis sticky (`panel-stack-active`, ≥1024px) competem pelo mesmo eixo de scroll:
   * o miolo pinado passa a comportar-se como `position: fixed` e sobrepõe secções anteriores
   * (#sobre) — texto “FRO/NT END”, métricas e “Stack/Core” no mesmo plano.
   * Mantemos pin só em viewport estreita, onde o sticky empilhado não está ativo.
   */
  const mm = ScrollTrigger.matchMedia({
    "(max-width: 1023px)": () => {
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: inner,
        pinSpacing: true,
      });
      return () => st.kill();
    },
  });

  return () => mm.revert();
}

function setupCounters(reduceMotion) {
  const els = gsap.utils.toArray("[data-count]");
  if (!els.length) return;

  const parseCountTarget = (el) => {
    const raw = el.dataset.count ?? "";
    const num = Number.parseFloat(String(raw).replace(/[^\d.]/g, ""));
    return Number.isFinite(num) ? num : NaN;
  };

  const formatPlain = (n, decimals) =>
    decimals > 0 ? n.toFixed(decimals) : String(Math.floor(n));

  const formatFinal = (n, decimals, usePlus) =>
    usePlus ? `+${formatPlain(n, decimals)}` : formatPlain(n, decimals);

  els.forEach((el) => {
    const target = parseCountTarget(el);
    if (Number.isNaN(target)) return;
    const decimals = Number.parseInt(el.dataset.decimals ?? "0", 10) || 0;
    const usePlus = !el.hasAttribute("data-count-no-plus");
    const obj = { value: 0 };
    const st = {
      trigger: el.closest("section") || el,
      start: "top 85%",
      once: true,
    };
    if (reduceMotion) {
      el.textContent = formatFinal(target, decimals, usePlus);
      return;
    }
    gsap.to(obj, {
      value: target,
      duration: 2.4,
      ease: "power2.out",
      scrollTrigger: st,
      onUpdate: () => {
        el.textContent = formatPlain(obj.value, decimals);
      },
      onComplete: () => {
        el.textContent = formatFinal(target, decimals, usePlus);
      },
    });
  });
}

function setupRevealEntrances(reduceMotion) {
  if (reduceMotion) return () => {};

  const tweens = [];
  const triggers = [];

  gsap.utils.toArray(".title").forEach((title) => {
    const lines = title.querySelectorAll(":scope > span");
    if (!lines.length) return;
    const tw = gsap.from(lines, {
      yPercent: 112,
      rotateZ: (i) => (i % 2 === 0 ? -1.4 : 1.4),
      opacity: 0,
      duration: 1.08,
      stagger: 0.12,
      ease: "power4.out",
      scrollTrigger: {
        trigger: title,
        start: "top 86%",
        toggleActions: "play none none none",
      },
    });
    tweens.push(tw);
    if (tw.scrollTrigger) triggers.push(tw.scrollTrigger);
  });

  const textSelectors = [
    ".folio-eyebrow",
    ".perfil-lead",
    ".lab-lead",
    ".stack-lead",
    "#trajetoria > .lead",
  ].join(", ");
  const textBatch = ScrollTrigger.batch(textSelectors, {
    interval: 0.14,
    batchMax: 8,
    onEnter: (batch) => {
      gsap.from(batch, {
        opacity: 0,
        y: 44,
        duration: 0.88,
        stagger: 0.055,
        ease: "power3.out",
        overwrite: "auto",
      });
    },
    start: "top 91%",
    once: true,
  });
  triggers.push(...textBatch);

  const headings = gsap.utils.toArray(".career-media h4, .career-media h5");
  headings.forEach((el) => {
    const tw = gsap.from(el, {
      x: -36,
      opacity: 0,
      duration: 0.92,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
    });
    tweens.push(tw);
    if (tw.scrollTrigger) triggers.push(tw.scrollTrigger);
  });

  const footerEls = gsap.utils.toArray(".footer-headline, .footer-copy, .footer-mail, .footer-meta");
  if (footerEls.length) {
    const tw = gsap.from(footerEls, {
      y: 40,
      opacity: 0,
      duration: 0.85,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".site-footer",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
    tweens.push(tw);
    if (tw.scrollTrigger) triggers.push(tw.scrollTrigger);
  }

  return () => {
    triggers.forEach((t) => t?.kill());
    tweens.forEach((tw) => tw.kill());
  };
}

function setupScrollHighlights(reduceMotion) {
  const highlights = gsap.utils.toArray(".animate-highlight");
  if (!highlights.length || reduceMotion) return;

  highlights.forEach((bg) => {
    const parent = bg.parentElement;
    gsap.set(bg, { scaleX: 0, transformOrigin: "left center" });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: parent,
          start: "top 82%",
          toggleActions: "restart none restart none",
        },
      })
      .to(bg, { scaleX: 1, duration: 0.58, ease: "power3.out" })
      .to(bg, {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 0.42,
        ease: "power3.in",
        delay: 0.12,
      });
  });
}

function setupProjectCards(reduceMotion) {
  const container = document.getElementById("project-cards");
  if (!container) return;
  const videoModal = document.getElementById("video-modal");
  const videoPlayer = document.getElementById("video-modal-player");
  const videoCloseBtn = document.getElementById("video-modal-close");
  const videoBackdrop = videoModal?.querySelector("[data-video-close]");
  const projetosSection = document.getElementById("projetos");
  const projetosEyebrow = document.getElementById("projetos-heading");
  const projetosTitle = projetosSection?.querySelector(".projetos-title");
  const projetosLead = projetosSection?.querySelector(".projetos-lead");
  const cards = [];
  const cleanups = [];
  let lastFocus = null;
  const isVideoLink = (value) => /\.mp4(\?.*)?$/i.test(String(value || "").trim());

  const closeVideoModal = () => {
    if (!videoModal || !videoPlayer) return;
    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
    videoModal.hidden = true;
    videoModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-video-modal-open");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  const openVideoModal = (src, label, triggerEl) => {
    if (!videoModal || !videoPlayer || !src) return;
    lastFocus = triggerEl || null;
    videoPlayer.src = src;
    videoPlayer.setAttribute("aria-label", `Video do projeto ${label}`);
    videoModal.hidden = false;
    videoModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-video-modal-open");
    const playPromise = videoPlayer.play();
    if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
  };

  if (videoCloseBtn) {
    const onCloseClick = () => closeVideoModal();
    videoCloseBtn.addEventListener("click", onCloseClick);
    cleanups.push(() => videoCloseBtn.removeEventListener("click", onCloseClick));
  }

  if (videoBackdrop) {
    const onBackdropClick = () => closeVideoModal();
    videoBackdrop.addEventListener("click", onBackdropClick);
    cleanups.push(() => videoBackdrop.removeEventListener("click", onBackdropClick));
  }

  const onEscCloseVideo = (e) => {
    if (e.key === "Escape") closeVideoModal();
  };
  document.addEventListener("keydown", onEscCloseVideo);
  cleanups.push(() => document.removeEventListener("keydown", onEscCloseVideo));

  const grid = document.createElement("div");
  grid.className = "project-showcase-grid";
  container.replaceChildren(grid);

  PROJECTS.forEach((project, index) => {
    const [name, year, role, tags, image, link] = project;
    const card = document.createElement("article");
    const isFeatured = index === 1;
    card.className = `project-showcase-card${isFeatured ? " project-showcase-card--featured" : ""}`;
    card.setAttribute("tabindex", "0");
    card.style.setProperty("--card-index", String(index));

    const media = document.createElement("figure");
    media.className = "project-showcase-card__media";

    const img = document.createElement("img");
    img.src = image;
    img.alt = `Preview do projeto ${name}`;
    img.loading = "lazy";
    img.decoding = "async";
    media.appendChild(img);

    const caption = document.createElement("figcaption");
    caption.className = "project-showcase-card__caption";

    const title = document.createElement("h3");
    title.textContent = name;

    const meta = document.createElement("p");
    meta.className = "project-showcase-card__meta";
    meta.textContent = `${role} · ${year}`;

    const tagsRow = document.createElement("div");
    tagsRow.className = "project-showcase-card__tags";
    (tags || []).slice(0, 3).forEach((tag) => {
      const chip = document.createElement("span");
      chip.textContent = tag;
      tagsRow.appendChild(chip);
    });

    const cta = document.createElement("a");
    cta.className = "project-showcase-card__cta";
    cta.href = link || "#";
    if (!isVideoLink(link)) {
      cta.target = "_blank";
      cta.rel = "noreferrer";
    }
    cta.textContent = "Ver mais";
    cta.setAttribute("aria-label", `Ver mais sobre ${name}`);
    cta.addEventListener("click", (e) => {
      if (!isVideoLink(link)) return;
      e.preventDefault();
      openVideoModal(link, name, cta);
    });

    caption.append(title, meta, tagsRow, cta);
    card.append(media, caption);
    grid.appendChild(card);
    cards.push(card);
  });

  if (reduceMotion || !cards.length) {
    return () => cleanups.forEach((cleanup) => cleanup());
  }

  let introTimeline = null;
  if (projetosSection) {
    const introTargets = [projetosEyebrow, projetosTitle, projetosLead].filter(Boolean);
    if (introTargets.length) {
      introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: projetosSection,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });
      introTimeline
        .from(introTargets, {
          autoAlpha: 0,
          y: 36,
          duration: 0.72,
          stagger: 0.09,
          ease: "power3.out",
        })
        .from(
          grid,
          {
            autoAlpha: 0,
            y: 28,
            duration: 0.78,
            ease: "power3.out",
          },
          "-=0.45",
        );
    }
  }

  gsap.set(cards, { autoAlpha: 0, y: 70, scale: 0.97 });
  const batch = ScrollTrigger.batch(cards, {
    interval: 0.1,
    batchMax: 2,
    start: "top 88%",
    once: true,
    onEnter: (entered) => {
      gsap.to(entered, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.86,
        stagger: 0.08,
        ease: "power3.out",
        overwrite: "auto",
      });
    },
  });

  return () => {
    if (introTimeline) {
      introTimeline.scrollTrigger?.kill();
      introTimeline.kill();
    }
    batch.forEach((trigger) => trigger.kill());
    cleanups.forEach((cleanup) => cleanup());
  };
}

function setupContatoOverlay(reduceMotion) {
  const contatoSection = document.getElementById("contato");
  if (!contatoSection) return () => {};
  const contatoShell = contatoSection.querySelector(".contato-overlay-shell");

  if (reduceMotion) {
    gsap.set(contatoSection, { clearProps: "transform,clipPath,opacity,filter" });
    if (contatoShell) gsap.set(contatoShell, { clearProps: "transform,opacity,filter" });
    return () => {};
  }

  // Sem sobreposicao entre secoes: apenas entrada suave do conteudo do contato.
  gsap.set(contatoSection, { clearProps: "transform,clipPath,opacity,filter" });
  if (!contatoShell) return () => {};

  const tween = gsap.from(contatoShell, {
    y: 34,
    autoAlpha: 0,
    duration: 0.82,
    ease: "power3.out",
    scrollTrigger: {
      trigger: contatoSection,
      start: "top 84%",
      toggleActions: "play none none none",
    },
  });

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
    gsap.set(contatoSection, { clearProps: "transform,clipPath,opacity,filter" });
    if (contatoShell) gsap.set(contatoShell, { clearProps: "transform,opacity,filter" });
  };
}

function setupContatoLandoReplica(reduceMotion) {
  const contato = document.getElementById("contato");
  if (!contato) return () => {};

  const menuBgs = gsap.utils.toArray("#contato .menu-item .menu-bg");
  const pageLinks = [...contato.querySelectorAll(".ln-footer-links--left .menu-link[href^='#']")];
  const marquee = document.getElementById("ln-footer-marquee");
  const marqueeContent = document.getElementById("ln-footer-marquee-content");
  const cleanups = [];

  const activatePageLink = (hash) => {
    pageLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === hash);
    });
  };

  const scrollToHashTarget = (hash) => {
    if (!hash || !hash.startsWith("#")) return;
    const target = document.querySelector(hash);
    if (!target) return;
    const header = document.querySelector(".header");
    const headerOffset = header ? header.offsetHeight + 10 : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const updateActivePageFromViewport = () => {
    if (!pageLinks.length) return;
    const viewportMid = window.innerHeight * 0.36;
    let bestHash = null;
    let bestDistance = Number.POSITIVE_INFINITY;

    pageLinks.forEach((link) => {
      const hash = link.getAttribute("href");
      const section = hash ? document.querySelector(hash) : null;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - viewportMid);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestHash = hash;
      }
    });

    if (bestHash) activatePageLink(bestHash);
  };

  if (pageLinks.length) {
    const onPageLinkClick = (e) => {
      const link = e.currentTarget;
      const hash = link && link.getAttribute ? link.getAttribute("href") : null;
      if (!hash) return;
      e.preventDefault();
      activatePageLink(hash);
      scrollToHashTarget(hash);
    };

    pageLinks.forEach((link) => link.addEventListener("click", onPageLinkClick));
    const onScroll = () => updateActivePageFromViewport();
    window.addEventListener("scroll", onScroll, { passive: true });
    updateActivePageFromViewport();

    cleanups.push(() => {
      pageLinks.forEach((link) => link.removeEventListener("click", onPageLinkClick));
      window.removeEventListener("scroll", onScroll);
    });
  }

  if (!reduceMotion && menuBgs.length) {
    gsap.set(menuBgs, { xPercent: -100 });
    const tl = gsap.timeline({ paused: true });
    menuBgs.forEach((bg, index) => {
      tl.to(
        bg,
        {
          xPercent: 100,
          duration: 0.8,
          ease: "power2.out",
        },
        index * 0.05,
      );
    });
    tl.to(menuBgs, {
      xPercent: -100,
      duration: 0.8,
      ease: "power2.in",
      delay: 0.4,
    });

    const st = ScrollTrigger.create({
      trigger: contato,
      start: "top 80%",
      toggleActions: "restart none restart none",
      animation: tl,
    });
    cleanups.push(() => {
      st.kill();
      tl.kill();
    });
  }

  if (!reduceMotion && marquee && marqueeContent) {
    let direction = 1;
    const speed = 0.4;
    let x = 0;
    const contentWidth = marqueeContent.offsetWidth || 1;
    gsap.set(marquee, { x: 0 });

    const tick = () => {
      x += speed * direction;
      if (x <= -contentWidth) x += contentWidth;
      if (x >= 0) x -= contentWidth;
      gsap.set(marquee, { x });
    };
    gsap.ticker.add(tick);

    const st = ScrollTrigger.create({
      trigger: marquee,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        direction = self.direction === 1 ? 1 : -1;
      },
    });

    cleanups.push(() => {
      gsap.ticker.remove(tick);
      st.kill();
    });
  }

  return () => cleanups.forEach((fn) => fn());
}

function setupPartnersMarquee(reduceMotion) {
  const track = document.getElementById("marquee-track");
  const wrap = document.getElementById("partners-marquee");
  if (!track || !wrap) return () => {};

  const fragment = document.createDocumentFragment();
  const normalizeLabel = (label) => String(label).trim();
  const getIconSlug = (label) => STACK_ICON_SLUG_BY_LABEL[normalizeLabel(label)] || null;

  const addChips = (list) => {
    list.forEach((b) => {
      const chip = document.createElement("span");
      chip.className = "brand-chip";

      const iconWrap = document.createElement("span");
      iconWrap.className = "brand-chip__icon";
      const slug = getIconSlug(b);
      if (slug) {
        const img = document.createElement("img");
        img.loading = "lazy";
        img.decoding = "async";
        img.alt = "";
        img.src = `https://cdn.simpleicons.org/${slug}/D2FF00`;
        img.onerror = () => {
          img.remove();
          iconWrap.textContent = String(b).trim().charAt(0).toUpperCase();
          iconWrap.classList.add("brand-chip__icon--fallback");
        };
        iconWrap.appendChild(img);
      } else {
        iconWrap.textContent = String(b).trim().charAt(0).toUpperCase();
        iconWrap.classList.add("brand-chip__icon--fallback");
      }

      const label = document.createElement("span");
      label.className = "brand-chip__label";
      label.textContent = b;

      chip.append(iconWrap, label);
      fragment.appendChild(chip);
    });
  };
  addChips(STACK);
  addChips(STACK);
  addChips(STACK);
  track.appendChild(fragment);

  let direction = 1;
  let baseSpeed = 0.46;
  let speedBoost = 1;
  let x = 0;
  let contentWidth = track.offsetWidth;

  const measure = () => {
    contentWidth = track.offsetWidth;
  };
  measure();

  const tick = () => {
    x += (baseSpeed * speedBoost) * direction;
    if (x <= -contentWidth / 3) x += contentWidth / 3;
    if (x >= 0) x -= contentWidth / 3;
    gsap.set(track, { x });
  };

  const onMouseMove = (e) => {
    if (reduceMotion) return;
    const rect = wrap.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    wrap.style.setProperty("--stack-tilt-y", `${(px * 4).toFixed(2)}deg`);
    wrap.style.setProperty("--stack-tilt-x", `${(-py * 3).toFixed(2)}deg`);
    wrap.style.setProperty("--stack-shine-x", `${((px + 0.5) * 100).toFixed(1)}%`);
  };

  const onMouseEnter = () => {
    speedBoost = 1.55;
  };

  const onMouseLeave = () => {
    speedBoost = 1;
    wrap.style.setProperty("--stack-tilt-y", "0deg");
    wrap.style.setProperty("--stack-tilt-x", "0deg");
    wrap.style.setProperty("--stack-shine-x", "50%");
  };

  if (!reduceMotion) {
    gsap.ticker.add(tick);
    wrap.addEventListener("mousemove", onMouseMove);
    wrap.addEventListener("mouseenter", onMouseEnter);
    wrap.addEventListener("mouseleave", onMouseLeave);
  }

  const st = ScrollTrigger.create({
    trigger: wrap,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      direction = self.direction === 1 ? 1 : -1;
    },
  });

  const onResize = () => measure();
  window.addEventListener("resize", onResize);

  return () => {
    if (!reduceMotion) {
      gsap.ticker.remove(tick);
      wrap.removeEventListener("mousemove", onMouseMove);
      wrap.removeEventListener("mouseenter", onMouseEnter);
      wrap.removeEventListener("mouseleave", onMouseLeave);
    }
    st.kill();
    window.removeEventListener("resize", onResize);
  };
}

function setupStackGradientBars(reduceMotion) {
  const root = document.getElementById("stack-gradient-bars");
  if (!root) return () => {};

  const numBars = 15;
  const gradientFrom = "rgba(210, 255, 0, 0.6)";
  const animationDuration = 2.2;

  const calculateHeight = (index, total) => {
    const position = index / (total - 1);
    const maxHeight = 1;
    const minHeight = 0.3;
    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightScale = Math.pow(distanceFromCenter * 2, 1.2);
    return minHeight + (maxHeight - minHeight) * heightScale;
  };

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < numBars; i += 1) {
    const bar = document.createElement("span");
    bar.className = "stack-gradient-bar";
    bar.style.flexBasis = `calc(100% / ${numBars})`;
    bar.style.maxWidth = `calc(100% / ${numBars})`;
    bar.style.setProperty("--initial-scale", String(calculateHeight(i, numBars)));
    bar.style.setProperty("--stack-delay", `${i * 0.1}s`);
    bar.style.setProperty("--stack-duration", `${animationDuration}s`);
    bar.style.background = `linear-gradient(to top, ${gradientFrom}, transparent 80%)`;
    if (reduceMotion) bar.style.animation = "none";
    fragment.appendChild(bar);
  }
  root.replaceChildren(fragment);

  return () => {
    root.replaceChildren();
  };
}

function setupTrajetoriaExpansion(reduceMotion) {
  const video = document.getElementById("trajetoria-bg-video");
  if (!video) return () => {};

  const tryPlay = () => {
    const p = video.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {});
    }
  };

  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.controls = false;

  if (reduceMotion) {
    video.pause();
    return () => {};
  }

  tryPlay();

  const onVisibility = () => {
    if (document.hidden) {
      video.pause();
    } else {
      tryPlay();
    }
  };

  document.addEventListener("visibilitychange", onVisibility);

  return () => {
    document.removeEventListener("visibilitychange", onVisibility);
    video.pause();
  };
}

function setupHelmets(reduceMotion) {
  const grid = document.getElementById("helmet-grid");
  const preloader = document.getElementById("helmets-preloader");
  const section = document.getElementById("lab");
  if (!grid) return () => {};

  const cards = [];
  LAB_ITEMS.forEach((helmet, idx) => {
    const num = `${idx + 1}`.padStart(2, "0");
    const card = document.createElement("article");
    card.className = "helmet-card";
    card.innerHTML = `
      <img src="./assets/images/helmets/image-helmet-${num}.webp" alt="${helmet[0]}">
      <img class="hover" src="./assets/images/helmets/image-helmet-hover-${num}.webp" alt="">
      <div class="helmet-meta">${helmet[0]} <strong>${helmet[1]}</strong></div>
    `;
    card.addEventListener("click", () => card.classList.toggle("active"));
    grid.appendChild(card);
    cards.push(card);
  });

  let st = null;
  if (preloader && section && !reduceMotion) {
    st = gsap.to(preloader, {
      yPercent: 14,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.55,
      },
    });
  }

  let cardBatch = [];
  if (!reduceMotion && cards.length) {
    gsap.set(cards, { autoAlpha: 0, y: 64, scale: 0.97 });
    cardBatch = ScrollTrigger.batch(cards, {
      interval: 0.05,
      batchMax: 4,
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.72,
          stagger: 0.04,
          ease: "power3.out",
        });
      },
      start: "top 86%",
      once: true,
    });
  }

  return () => {
    cardBatch.forEach((t) => t.kill());
    if (st) {
      st.scrollTrigger?.kill();
      st.kill();
    }
  };
}

function initThreeBg(reduceMotion, depthState) {
  const canvas = document.getElementById("three-bg");
  if (!canvas || reduceMotion || typeof THREE === "undefined") {
    if (canvas && reduceMotion) canvas.style.display = "none";
    return () => {};
  }

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(56, 1, 0.1, 100);
  camera.position.z = 8;
  const projetosSection = document.getElementById("projetos");
  let projetosThreeTrigger = null;

  const knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(2.15, 0.2, 160, 28),
    new THREE.MeshBasicMaterial({ color: 0xd2ff00, wireframe: true }),
  );
  scene.add(knot);

  const n = 600;
  const positions = new Float32Array(n * 3);
  for (let i = 0; i < n * 3; i += 1) positions[i] = (Math.random() - 0.5) * 22;
  const particlesGeo = new THREE.BufferGeometry();
  particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const stars = new THREE.Points(
    particlesGeo,
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.028, transparent: true, opacity: 0.9 }),
  );
  scene.add(stars);

  const maxPR = Math.min(window.devicePixelRatio || 1, 2);
  const resize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setPixelRatio(maxPR);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener("resize", resize);

  if (projetosSection) {
    const hideThree = () => document.body.classList.add("three-off-projects");
    const showThree = () => document.body.classList.remove("three-off-projects");
    projetosThreeTrigger = ScrollTrigger.create({
      trigger: projetosSection,
      start: "top bottom",
      end: "bottom top",
      onEnter: hideThree,
      onEnterBack: hideThree,
      onLeave: showThree,
      onLeaveBack: showThree,
    });
  }

  let raf = 0;
  const render = () => {
    const depth = depthState ? depthState.scrollDepth || 0 : 0;
    const mix = depthState ? depthState.sectionMix || 0 : 0;
    const speedBoost = 1 + depth * 1.8 + mix * 0.8;

    knot.rotation.x += 0.0024 * speedBoost;
    knot.rotation.y += 0.0031 * speedBoost;
    knot.rotation.z = Math.sin(performance.now() * 0.00035) * 0.18 * (1 + depth);
    knot.position.z = -0.4 + depth * 1.15;
    stars.rotation.y += 0.00022 + depth * 0.0005;
    stars.rotation.x = Math.sin(performance.now() * 0.00022) * (0.03 + mix * 0.09);
    stars.material.opacity = 0.72 + depth * 0.25;
    camera.position.z = 8 - depth * 1.1;

    renderer.render(scene, camera);
    raf = requestAnimationFrame(render);
  };
  raf = requestAnimationFrame(render);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
    if (projetosThreeTrigger) projetosThreeTrigger.kill();
    document.body.classList.remove("three-off-projects");
    particlesGeo.dispose();
    knot.geometry.dispose();
    knot.material.dispose();
    stars.material.dispose();
    renderer.dispose();
  };
}

function main() {
  const reduceMotion = prefersReducedMotion();
  const disposers = [];
  const depthState = { scrollDepth: 0, sectionMix: 0 };
  const ctx = gsap.context(() => {
    disposers.push(setupMenu(reduceMotion));
    disposers.push(setupHeroBlobMask(reduceMotion));
    disposers.push(setupHeroProfileCard(reduceMotion));
    disposers.push(setupPerspectiveHoverCards(reduceMotion));
    disposers.push(setupPageIntroOutro(reduceMotion));
    disposers.push(setupScrollProgress(reduceMotion, depthState));
    disposers.push(setupSectionScrollRails(reduceMotion));
    disposers.push(setupLayeredParallax(reduceMotion));
    disposers.push(setupStackPin(reduceMotion));
    disposers.push(setupPanelStack(reduceMotion));
    disposers.push(setupRevealEntrances(reduceMotion));
    setupCounters(reduceMotion);
    setupScrollHighlights(reduceMotion);
    const projectDisposer = setupProjectCards(reduceMotion);
    if (typeof projectDisposer === "function") disposers.push(projectDisposer);
    disposers.push(setupContatoOverlay(reduceMotion));
    disposers.push(setupContatoLandoReplica(reduceMotion));
    disposers.push(setupStackGradientBars(reduceMotion));
    disposers.push(setupPartnersMarquee(reduceMotion));
    disposers.push(setupTrajetoriaExpansion(reduceMotion));
    disposers.push(setupHelmets(reduceMotion));
    disposers.push(initThreeBg(reduceMotion, depthState));
  }, document.body);

  if (!reduceMotion) {
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }

  window.addEventListener(
    "beforeunload",
    () => {
      disposers.forEach((fn) => typeof fn === "function" && fn());
      ctx.revert();
    },
    { once: true },
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}
