function configurarDestaquesScroll(movimentoReduzido) {
  const highlights = gsap.utils.toArray(".animate-highlight");
  if (!highlights.length || movimentoReduzido) return;

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

export { configurarDestaquesScroll };
