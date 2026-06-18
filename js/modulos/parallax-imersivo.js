// â€”â€” Parallax imersivo (desktop): profundidade sutil ligada ao scroll â€”â€”
function configurarParallaxImersivo(movimentoReduzido) {
  if (movimentoReduzido) return () => {};
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

  // Retrato do contato e fundo da trajetÃ³ria ganham leve deslocamento de profundidade.
  addParallax(".ln-footer-image", 8, -8, 0.7);
  addParallax(".trajetoria-expansion__bg-image", -6, 6, 0.8);

  return () => {
    triggers.forEach((t) => t.kill());
    tweens.forEach((tw) => tw.kill());
  };
}

export { configurarParallaxImersivo };
