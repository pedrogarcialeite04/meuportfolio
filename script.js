

gsap.registerPlugin(ScrollTrigger);


const PROJECTS = [
  [
    "devero",
    "2026",
    "Freelance",
    ["Landing Page", "UI", "tailwindcss", "javascript", "html", "css", "gsap", "scrolltrigger"],
    "./assets/images/devero.webp",
    "https://www.linkedin.com/feed/update/urn:li:activity:7442203757192548352/",
  ],
  [
    "museu",
    "2026",
    "Completo",
    ["WebGL", "Three.js", "3D", "javascript", "gsap", "scrolltrigger", "interatividade"],
    "./assets/images/Captura de Tela (2).webp",
    "https://museupedroca.vercel.app/",
  ],
  [
    "fjstopografia",
    "2026",
    "Freelance",
    ["Site", "Responsividade Mobile", "javascript", "html", "css", "gsap", "scrolltrigger", "three.js", "full stack", "node.js", "mongodb"],
    "./assets/images/topografia.webp",
    "https://www.fjstopografia.com.br/",
  ],
  [
    "convite de casamento",
    "2026",
    "Freelance",
    ["Design", "Front-end", "Back-end", "Full Stack", "node.js", "javascript", "three.js", "mongodb", "html", "css", "gsap", "scrolltrigger"],
    "./assets/images/valquiria.webp",
    "https://github.com/pedrogarcialeite04/landingpage-casamento",
  ],
  [
    "landing page Theze",
    "2025",
    "Freelance",
    ["Landing Page", "javascript", "html", "css", "gsap", "scrolltrigger", "three.js"],
    "./assets/images/theze.webp",
    "https://thezeagricola.netlify.app/",
  ],
  [
    "Posto",
    "2025",
    "completo",
    ["full stack", "node.js", "mongodb", "javascript"],
    "./assets/images/posto.webp",
    "https://www.youtube.com/watch?v=9zFzS9nHbZU",
  ],
  [
    "Sistema de Vendas",
    "2025",
    "Completo",
    ["full stack", "node.js", "mongodb", "javascript"],
    "./assets/images/venda.webp",
    "https://www.youtube.com/watch?v=skiS8TAx6zA",
  ],
  [
    "pg flow",
    "2025",
    "completo",
    ["Landing Page", "front-end", "javascript", "gsap", "scrolltrigger"],
    "./assets/images/pgflow.webp",
    "https://pgflow.vercel.app/",
  ],
  [
    "Registro de Gastos",
    "2025",
    "completo",
    ["full stack", "node.js", "mongodb", "javascript"],
    "./assets/images/robo.webp",
    "https://registrospedro.netlify.app/",
  ],
  [
    "foco",
    "2026",
    "completo",
    ["full stack", "UI", "javascript", "gsap"],
    "./assets/images/foco.webp",
    "https://foco-rotina.vercel.app/",
  ],
  [
    "Thegadu",
    "2026",
    "freelance",
    ["full stack", "node.js", "mongodb", "javascript"],
    "./assets/images/thegadu.webp",
    "https://thegadu.onrender.com/entrada.html",
  ],
  [
    "Registros de Cheques",
    "2026",
    "freelance",
    ["full stack", "node.js", "mongodb", "javascript"],
    "./assets/images/cheques.webp",
    "https://saa-s-cheques.vercel.app/",
  ],
  [
    "PratoUp",
    "2026",
    "freelance",
    ["Landing Page", "UI", "javascript", "html", "css", "gsap", "scrolltrigger"],
    "./assets/images/pratoup.webp",
    "https://pratoup.com.br/",
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
  "TypeScript",
  "React",
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
    background: "./assets/images/imgfundo.webp",
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

const perfMqMobile = window.matchMedia("(max-width: 768px)");
const perfMqCoarse = window.matchMedia("(pointer: coarse)");

function perfSaveDataOrSlowNet() {
  const conn = navigator.connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  const t = conn.effectiveType;
  return t === "slow-2g" || t === "2g";
}

/** DPR adaptativo: mantém nitidez no desktop e poupa GPU em mobile / hardware modesto. */
function getOptimalCanvasDpr(maxDesktop = 2, maxMobile = 1.35) {
  const cap = perfMqMobile.matches || perfMqCoarse.matches ? maxMobile : maxDesktop;
  if (perfSaveDataOrSlowNet()) return Math.min(1, cap);
  if (typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4) {
    return Math.min(perfMqMobile.matches ? 1 : 1.25, cap);
  }
  return Math.min(window.devicePixelRatio || 1, cap);
}

function bindDocHidden(onChange) {
  let hidden = document.hidden;
  const onVis = () => {
    hidden = document.hidden;
    onChange(hidden);
  };
  document.addEventListener("visibilitychange", onVis);
  return () => document.removeEventListener("visibilitychange", onVis);
}

/** Pausa loops pesados quando a secção sai do viewport (efeito intacto ao voltar). */
function observeInView(el, onChange, rootMargin = "80px 0px") {
  if (!el || typeof IntersectionObserver === "undefined") return () => {};
  let inView = true;
  const io = new IntersectionObserver(
    (entries) => {
      const next = entries.some((e) => e.isIntersecting);
      if (next !== inView) {
        inView = next;
        onChange(inView);
      }
    },
    { threshold: 0, rootMargin },
  );
  io.observe(el);
  return () => io.disconnect();
}

function getAbsoluteTop(el) {
  let top = 0;
  let node = el;
  while (node) {
    top += node.offsetTop || 0;
    node = node.offsetParent;
  }
  return top;
}

function getHashScrollTop(target, headerOffset) {
  const rawScrollMarginTop = window.getComputedStyle(target).scrollMarginTop || "0";
  const scrollMarginTop = Number.parseFloat(rawScrollMarginTop) || 0;
  const offset = Math.max(headerOffset, scrollMarginTop);
  const absoluteTop = target.getBoundingClientRect().top + window.scrollY;
  return Math.max(0, absoluteTop - offset);
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

  const scrollToHashTarget = (hash, updateUrl = false) => {
    if (!hash || !hash.startsWith("#")) return;
    const target = document.querySelector(hash);
    if (!target) return;
    const header = document.querySelector(".header");
    const headerOffset = header ? header.offsetHeight + 10 : 0;
    const top = getHashScrollTop(target, headerOffset);
    if (updateUrl && window.location.hash !== hash) {
      history.pushState(null, "", hash);
    }
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const onMenuLinkClick = (e) => {
    const link = e.currentTarget;
    const hash = link && link.getAttribute ? link.getAttribute("href") : null;
    enableActiveTracking = true;
    if (hash) {
      e.preventDefault();
      activateMenuLink(hash);
      scrollToHashTarget(hash, true);
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

/**
 * Safari (macOS), iOS e iPadOS usam composição WebKit onde
 * `mask-image: url(#svg)` + `feGaussianBlur` no conteúdo da máscara custa muito e costuma travar.
 * O fallback por gradientes radiais no CSS é estável e fluido nos mesmos browsers.
 */
function prefersHeroGradientMaskForStability() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const maxTouch = typeof navigator.maxTouchPoints === "number" ? navigator.maxTouchPoints : 0;
  const isClassicIOS = /iP(ad|hone|od)/i.test(ua);
  const isIPadOSLike = /Macintosh/i.test(ua) && maxTouch > 1;
  if (isClassicIOS || isIPadOSLike) return true;
  const isDesktopSafari = /Safari/i.test(ua) && !/(Chrome|CriOS|Chromium|Edg|OPR|Android)/i.test(ua);
  return Boolean(isDesktopSafari);
}

function getContainBox(containerWidth, containerHeight, assetRatio) {
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

function setupHeroBlobMask(reduceMotion) {
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

  if (reduceMotion) {
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
  const preferGradientMask = prefersCoarsePointer || prefersHeroGradientMaskForStability();

  // Gradient-mask: estável no WebKit (Safari / iOS / iPadOS). SVG+goo fica para motores Chromium no desktop.
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

  const head = spring2DCreate(250, 30);
  const body1 = spring2DCreate(220, 34);
  const body2 = spring2DCreate(190, 38);
  const ratioSpring = spring2DCreate(300, 40);

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
    const baseBox = getContainBox(stageRect.width, stageRect.height, HERO_BASE_IMAGE_RATIO);
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

  const unbindHeroDocHidden = bindDocHidden((hidden) => {
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

function setupHeroLinesParallax(reduceMotion) {
  const hero = document.getElementById("hero");
  if (!hero || reduceMotion) return () => {};

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = 0;
  let heroInView = true;

  const needsTick = () =>
    heroInView &&
    !document.hidden &&
    (Math.abs(targetX - currentX) > 0.0008 ||
      Math.abs(targetY - currentY) > 0.0008 ||
      targetX !== 0 ||
      targetY !== 0);

  const tick = () => {
    rafId = 0;
    if (!heroInView || document.hidden) return;

    currentX += (targetX - currentX) * 0.055;
    currentY += (targetY - currentY) * 0.055;
    hero.style.setProperty("--hero-line-shift-x", `${(currentX * 11).toFixed(2)}px`);
    hero.style.setProperty("--hero-line-shift-y", `${(currentY * 7).toFixed(2)}px`);
    hero.style.setProperty("--hero-line-ghost-x", `${(-currentX * 18).toFixed(2)}px`);
    hero.style.setProperty("--hero-line-ghost-y", `${(-currentY * 12).toFixed(2)}px`);

    if (needsTick()) rafId = requestAnimationFrame(tick);
  };

  const ensureTick = () => {
    if (!rafId && needsTick()) rafId = requestAnimationFrame(tick);
  };

  const onPointerMove = (e) => {
    if (!heroInView) return;
    const rect = hero.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      targetX = 0;
      targetY = 0;
      ensureTick();
      return;
    }
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    ensureTick();
  };

  const onPointerLeave = () => {
    targetX = 0;
    targetY = 0;
    ensureTick();
  };

  const unbindDocHidden = bindDocHidden(() => {
    if (document.hidden && rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    } else {
      ensureTick();
    }
  });

  const unbindInView = observeInView(
    hero,
    (inView) => {
      heroInView = inView;
      if (inView) ensureTick();
      else if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    },
    "120px 0px",
  );

  ensureTick();
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  hero.addEventListener("pointerleave", onPointerLeave);

  const st = ScrollTrigger.create({
    trigger: hero,
    start: "top top",
    end: "bottom top",
    scrub: 0.45,
    onUpdate: (self) => {
      hero.style.setProperty("--hero-scroll", self.progress.toFixed(4));
    },
  });

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    unbindDocHidden();
    unbindInView();
    window.removeEventListener("pointermove", onPointerMove);
    hero.removeEventListener("pointerleave", onPointerLeave);
    st.kill();
    hero.style.removeProperty("--hero-line-shift-x");
    hero.style.removeProperty("--hero-line-shift-y");
    hero.style.removeProperty("--hero-line-ghost-x");
    hero.style.removeProperty("--hero-line-ghost-y");
    hero.style.removeProperty("--hero-scroll");
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

  if (reduceMotion) {
    states.forEach((state) => {
      state.onMove = onMoveFactory(state);
      state.onLeave = onLeaveFactory(state);
      state.card.addEventListener("mousemove", state.onMove);
      state.card.addEventListener("mouseleave", state.onLeave);
    });
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
    let anyMotion = false;

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

      if (
        state.active ||
        Math.abs(state.targetX - state.currentX) > 0.004 ||
        Math.abs(state.targetY - state.currentY) > 0.004 ||
        Math.abs(state.velocityX) > 0.02 ||
        Math.abs(state.velocityY) > 0.02
      ) {
        anyMotion = true;
      }
    });

    if (!anyMotion) {
      gsap.ticker.remove(tick);
      tiltTickerOn = false;
    }
  };

  let tiltTickerOn = false;
  const ensureTiltTicker = () => {
    if (!tiltTickerOn) {
      gsap.ticker.add(tick);
      tiltTickerOn = true;
    }
  };

  states.forEach((state) => {
    const baseMove = onMoveFactory(state);
    const baseLeave = onLeaveFactory(state);
    state.onMove = (event) => {
      baseMove(event);
      ensureTiltTicker();
    };
    state.onLeave = () => {
      baseLeave();
      ensureTiltTicker();
    };
    state.card.addEventListener("mousemove", state.onMove);
    state.card.addEventListener("mouseleave", state.onLeave);
  });

  return () => {
    if (tiltTickerOn) gsap.ticker.remove(tick);
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

function setupScrollProgress(reduceMotion) {
  if (reduceMotion) return () => {};
  const st = ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 0.2,
    onUpdate: (self) => {
      document.documentElement.style.setProperty("--scroll", self.progress.toFixed(4));
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

  document.body.classList.add("panel-stack-active");
  requestAnimationFrame(() => ScrollTrigger.refresh());
  return () => {
    document.body.classList.remove("panel-stack-active");
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };
}

function setupStackPin(reduceMotion) {
  if (reduceMotion) return () => {};
  const section = document.getElementById("stack");
  const inner = section?.querySelector(".stack-pin-inner");
  if (!section || !inner) return () => {};

  /**
   * Com panel stack ativo em todas as telas, o pin do #stack passa a competir
   * com os paineis sticky e causa sobreposicoes e recortes.
   * Mantemos este setup como no-op para preservar o fluxo de scroll consistente.
   */
  return () => {};
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
  const stackedProjectsMq = window.matchMedia("(max-width: 1024px)");
  const isStackedProjectsView = stackedProjectsMq.matches;
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

  const applyProjectsLayoutMode = () => {
    const width = window.innerWidth || 0;
    grid.classList.remove("project-showcase-grid--desktop", "project-showcase-grid--tablet", "project-showcase-grid--mobile");
    if (width <= 900) {
      grid.classList.add("project-showcase-grid--mobile");
      return;
    }
    if (width <= 1200) {
      grid.classList.add("project-showcase-grid--tablet");
      return;
    }
    grid.classList.add("project-showcase-grid--desktop");
  };

  applyProjectsLayoutMode();
  const onProjectsViewportChange = () => applyProjectsLayoutMode();
  window.addEventListener("resize", onProjectsViewportChange, { passive: true });
  cleanups.push(() => window.removeEventListener("resize", onProjectsViewportChange));

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
    (tags || []).forEach((tag) => {
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

  if (reduceMotion || isStackedProjectsView || !cards.length) {
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

  const scrollToHashTarget = (hash, updateUrl = false) => {
    if (!hash || !hash.startsWith("#")) return;
    const target = document.querySelector(hash);
    if (!target) return;
    const header = document.querySelector(".header");
    const headerOffset = header ? header.offsetHeight + 10 : 0;
    const top = getHashScrollTop(target, headerOffset);
    if (updateUrl && window.location.hash !== hash) {
      history.pushState(null, "", hash);
    }
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const updateActivePageFromViewport = () => {
    if (!pageLinks.length) return;
    const header = document.querySelector(".header");
    const headerOffset = header ? header.offsetHeight + 10 : 0;
    const probeY = window.scrollY + headerOffset + window.innerHeight * 0.35;
    let bestHash = null;
    let bestDistance = Number.POSITIVE_INFINITY;

    pageLinks.forEach((link) => {
      const hash = link.getAttribute("href");
      const section = hash ? document.querySelector(hash) : null;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = top + Math.max(1, rect.height);

      if (probeY >= top && probeY < bottom) {
        bestHash = hash;
        bestDistance = 0;
        return;
      }

      const center = top + rect.height * 0.5;
      const distance = Math.abs(center - probeY);
      if (bestDistance !== 0 && distance < bestDistance) {
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
      scrollToHashTarget(hash, true);
    };

    pageLinks.forEach((link) => link.addEventListener("click", onPageLinkClick));
    const onScroll = () => updateActivePageFromViewport();
    const onResize = () => updateActivePageFromViewport();
    const onHashChange = () => updateActivePageFromViewport();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("hashchange", onHashChange);
    updateActivePageFromViewport();

    cleanups.push(() => {
      pageLinks.forEach((link) => link.removeEventListener("click", onPageLinkClick));
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("hashchange", onHashChange);
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

  let marqueeTickerOn = false;
  let marqueeInView = true;
  const syncMarqueeTicker = () => {
    const shouldRun = !reduceMotion && marqueeInView && !document.hidden;
    if (shouldRun && !marqueeTickerOn) {
      gsap.ticker.add(tick);
      marqueeTickerOn = true;
    } else if (!shouldRun && marqueeTickerOn) {
      gsap.ticker.remove(tick);
      marqueeTickerOn = false;
    }
  };

  const unbindMarqueeInView = observeInView(wrap, (inView) => {
    marqueeInView = inView;
    syncMarqueeTicker();
  }, "160px 0px");
  const unbindMarqueeDocHidden = bindDocHidden(() => syncMarqueeTicker());

  const onMouseEnter = () => {
    speedBoost = 1.55;
  };

  const onMouseLeave = () => {
    speedBoost = 1;
  };

  if (!reduceMotion) {
    syncMarqueeTicker();
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
      if (marqueeTickerOn) gsap.ticker.remove(tick);
      unbindMarqueeInView();
      unbindMarqueeDocHidden();
      wrap.removeEventListener("mouseenter", onMouseEnter);
      wrap.removeEventListener("mouseleave", onMouseLeave);
    }
    st.kill();
    window.removeEventListener("resize", onResize);
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
  // Evita requests desnecessarias de imagens quando a secao Lab esta desativada.
  if (!grid || !section || section.hasAttribute("hidden")) return () => {};

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

// —— FX surreais: camadas de fundo, barra de progresso e grão ——
function setupFxLayers(reduceMotion) {
  const body = document.body;
  const created = [];

  const bar = document.createElement("div");
  bar.className = "fx-scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  body.appendChild(bar);
  created.push(bar);

  // Em reduced-motion o setupScrollProgress não escreve --scroll; garantimos a barra aqui.
  let onScrollVar = null;
  if (reduceMotion) {
    onScrollVar = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight || 1;
      const p = Math.min(1, Math.max(0, (window.scrollY || 0) / max));
      doc.style.setProperty("--scroll", p.toFixed(4));
    };
    window.addEventListener("scroll", onScrollVar, { passive: true });
    window.addEventListener("resize", onScrollVar);
    onScrollVar();
  } else {
    // Orbs (blur pesado) e grão animado só no desktop com ponteiro fino: poupa
    // bateria/GPU em mobile sem remover os efeitos onde fazem diferença.
    const heavyFxOk =
      window.matchMedia("(min-width: 768px)").matches &&
      window.matchMedia("(pointer: fine)").matches;

    if (heavyFxOk) {
      const grain = document.createElement("div");
      grain.className = "fx-grain";
      grain.setAttribute("aria-hidden", "true");
      body.appendChild(grain);
      created.push(grain);

      const orbs = document.createElement("div");
      orbs.className = "fx-orbs";
      orbs.setAttribute("aria-hidden", "true");
      orbs.innerHTML =
        '<span class="fx-orb fx-orb--1"></span><span class="fx-orb fx-orb--2"></span><span class="fx-orb fx-orb--3"></span>';
      body.appendChild(orbs);
      created.push(orbs);
    }
  }

  return () => {
    if (onScrollVar) {
      window.removeEventListener("scroll", onScrollVar);
      window.removeEventListener("resize", onScrollVar);
    }
    created.forEach((el) => el.remove());
  };
}

// —— Skew por velocidade de scroll (toque Awwwards) na grade de projetos ——
function setupScrollVelocitySkew(reduceMotion) {
  if (reduceMotion) return () => {};
  if (window.matchMedia("(pointer: coarse)").matches) return () => {};
  const grid = document.querySelector(".project-showcase-grid");
  if (!grid) return () => {};

  let lastY = window.scrollY || 0;
  let skew = 0;
  let target = 0;
  let rafId = 0;

  const loop = () => {
    skew += (target - skew) * 0.12;
    target *= 0.86;
    grid.style.setProperty("--grid-skew", `${skew.toFixed(3)}deg`);
    if (Math.abs(skew) > 0.01 || Math.abs(target) > 0.01) {
      rafId = requestAnimationFrame(loop);
    } else {
      grid.style.setProperty("--grid-skew", "0deg");
      rafId = 0;
    }
  };
  const onScroll = () => {
    const y = window.scrollY || 0;
    const v = y - lastY;
    lastY = y;
    target = Math.max(-2.4, Math.min(2.4, v * 0.06));
    if (!rafId) rafId = requestAnimationFrame(loop);
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
    if (rafId) cancelAnimationFrame(rafId);
    grid.style.setProperty("--grid-skew", "0deg");
  };
}

// —— Botões magnéticos ——
function setupMagneticButtons(reduceMotion) {
  if (reduceMotion) return () => {};
  if (!window.matchMedia("(pointer: fine)").matches) return () => {};
  const selector = [".hero-mask-lock", ".footer-cta-action"].join(", ");
  const els = Array.from(document.querySelectorAll(selector));
  if (!els.length) return () => {};

  const cleanups = [];
  els.forEach((el) => {
    el.classList.add("fx-magnetic");
    const strength = 0.34;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.5, ease: "power3.out", overwrite: "auto" });
    };
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)", overwrite: "auto" });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    cleanups.push(() => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      gsap.set(el, { clearProps: "transform" });
      el.classList.remove("fx-magnetic");
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

// —— Parallax imersivo (desktop): profundidade sutil ligada ao scroll ——
function setupImmersiveParallax(reduceMotion) {
  if (reduceMotion) return () => {};
  if (window.matchMedia("(pointer: coarse)").matches) return () => {};
  if (typeof ScrollTrigger === "undefined") return () => {};

  const triggers = [];
  const tweens = [];

  const addParallax = (selector, fromY, toY, scrub = 0.6) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const tw = gsap.fromTo(
      el,
      { yPercent: fromY },
      {
        yPercent: toY,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("section") || el,
          start: "top bottom",
          end: "bottom top",
          scrub,
        },
      },
    );
    tweens.push(tw);
    if (tw.scrollTrigger) triggers.push(tw.scrollTrigger);
  };

  // Retrato do contato e fundo da trajetória ganham leve deslocamento de profundidade.
  addParallax(".ln-footer-image", 8, -8, 0.7);
  addParallax(".trajetoria-expansion__bg-image", -6, 6, 0.8);

  return () => {
    triggers.forEach((t) => t.kill());
    tweens.forEach((tw) => tw.kill());
  };
}

// —— Rede de segurança dos reveals: nada de conteúdo preso invisível ——
// Cobre scroll muito rápido, navegação por hash e crawlers que não rolam a página.
function setupRevealSafety() {
  const main = document.getElementById("main-content");
  if (!main) return () => {};

  const isStuckHidden = (el) => {
    const cs = window.getComputedStyle(el);
    return cs.visibility === "hidden" || Number.parseFloat(cs.opacity) === 0;
  };
  const isMeaningfullyInView = (el) => {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || 0;
    if (!r.width || !r.height) return false;
    // Bem dentro do viewport: evita "estourar" um reveal que está prestes a animar.
    return r.top < vh * 0.92 && r.bottom > vh * 0.04;
  };

  const sweep = () => {
    const nodes = main.querySelectorAll("[style]");
    nodes.forEach((el) => {
      if (!isStuckHidden(el) || !isMeaningfullyInView(el)) return;
      if (typeof gsap !== "undefined") {
        gsap.set(el, { autoAlpha: 1, clearProps: "opacity,visibility,transform" });
      } else {
        el.style.visibility = "visible";
        el.style.opacity = "1";
      }
    });
  };

  let scrollEndTimer = 0;
  const onScroll = () => {
    if (scrollEndTimer) clearTimeout(scrollEndTimer);
    scrollEndTimer = window.setTimeout(sweep, 450);
  };
  const onHash = () => window.setTimeout(sweep, 700);

  const initial = [900, 1800, 3200].map((t) => window.setTimeout(sweep, t));
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("hashchange", onHash);
  window.addEventListener("load", () => window.setTimeout(sweep, 600), { once: true });

  return () => {
    if (scrollEndTimer) clearTimeout(scrollEndTimer);
    initial.forEach((t) => clearTimeout(t));
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("hashchange", onHash);
  };
}

/**
 * Fumaça interativa na 1ª página (#hero): revela as linhas onduladas do fundo.
 * Canvas 2D (sem WebGL) — estável em todos os browsers, não toca na máscara do rosto.
 *
 * Camadas:
 *  - .hero-lines (z0) + .hero-veil (z2): linhas ocultas sob véu claro
 *  - .hero-smoke-zone (z8): faixa superior — fumaça revela linhas (cursor/toque)
 *  - .hero-stage (z10): rosto + máscara goo — intocada
 */
function setupHeroSmoke(reduceMotion) {
  const canvas = document.getElementById("hero-smoke");
  const zone = document.querySelector(".hero-smoke-zone");
  const hero = document.getElementById("hero");
  if (!canvas || !zone || !hero || reduceMotion) {
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
    dpr = getOptimalCanvasDpr(2, 1.35);

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
    if (!perfMqMobile.matches || diffuseFrame % 2 === 0) diffuseDensity();

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

  const unbindSmokeDocHidden = bindDocHidden((hidden) => {
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

function main() {
  const reduceMotion = prefersReducedMotion();
  const disposers = [];

  if (!reduceMotion && typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });
  }
  if (!reduceMotion && typeof gsap !== "undefined") {
    gsap.ticker.lagSmoothing(500, 33);
  }

  const ctx = gsap.context(() => {
    disposers.push(setupMenu(reduceMotion));
    disposers.push(setupHeroBlobMask(reduceMotion));
    disposers.push(setupHeroLinesParallax(reduceMotion));
    disposers.push(setupPerspectiveHoverCards(reduceMotion));
    disposers.push(setupPageIntroOutro(reduceMotion));
    disposers.push(setupScrollProgress(reduceMotion));
    disposers.push(setupSectionScrollRails(reduceMotion));
    disposers.push(setupLayeredParallax(reduceMotion));
    disposers.push(setupStackPin(reduceMotion));
    disposers.push(setupPanelStack(reduceMotion));
    disposers.push(setupRevealEntrances(reduceMotion));
    setupCounters(reduceMotion);
    setupScrollHighlights(reduceMotion);
    const projectDisposer = setupProjectCards(reduceMotion);
    if (typeof projectDisposer === "function") disposers.push(projectDisposer);
    disposers.push(setupScrollVelocitySkew(reduceMotion));
    disposers.push(setupContatoOverlay(reduceMotion));
    disposers.push(setupContatoLandoReplica(reduceMotion));
    disposers.push(setupPartnersMarquee(reduceMotion));
    disposers.push(setupTrajetoriaExpansion(reduceMotion));
    const labSection = document.getElementById("lab");
    if (labSection && !labSection.hasAttribute("hidden")) {
      disposers.push(setupHelmets(reduceMotion));
    }
    disposers.push(setupHeroSmoke(reduceMotion));
    disposers.push(setupFxLayers(reduceMotion));
    disposers.push(setupMagneticButtons(reduceMotion));
    disposers.push(setupImmersiveParallax(reduceMotion));
    disposers.push(setupRevealSafety());
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
