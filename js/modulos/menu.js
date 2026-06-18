import { obterScrollTopoHash } from "../utilitarios/geral.js";

// Menu fullscreen — abre/fecha, destaca link ativo e faz parallax nas fotos
function configurarMenu(movimentoReduzido) {
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
    if (open && closeOverlayBtn && !movimentoReduzido && typeof gsap !== "undefined") {
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
    if (movimentoReduzido || typeof gsap === "undefined" || !closeOverlayBtn) {
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
    const top = obterScrollTopoHash(target, headerOffset);
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
    if (!parallaxGrid || movimentoReduzido) return;
    const rect = panel.getBoundingClientRect();
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    const cy = clamp(ny * 2, -1, 1);
    gsap.to(parallaxGrid, { y: -cy * moveAmount * 0.72, duration: 1.1, ease: "power2.out", overwrite: "auto" });
  };

  const resetGalleries = () => {
    if (!parallaxGrid || movimentoReduzido) return;
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

export { configurarMenu };
