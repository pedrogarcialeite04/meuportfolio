import { obterScrollTopoHash } from "../utilitarios/geral.js";

function configurarFooterContato(movimentoReduzido) {
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
    const top = obterScrollTopoHash(target, headerOffset);
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

  if (!movimentoReduzido && menuBgs.length) {
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

  if (!movimentoReduzido && marquee && marqueeContent) {
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

export { configurarFooterContato };
