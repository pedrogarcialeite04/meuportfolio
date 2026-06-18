// â€”â€” Rede de seguranÃ§a dos reveals: nada de conteÃºdo preso invisÃ­vel â€”â€”
// Cobre scroll muito rÃ¡pido, navegaÃ§Ã£o por hash e crawlers que nÃ£o rolam a pÃ¡gina.
function configurarSegurancaReveal() {
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
    // Bem dentro do viewport: evita "estourar" um reveal que estÃ¡ prestes a animar.
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

export { configurarSegurancaReveal };
