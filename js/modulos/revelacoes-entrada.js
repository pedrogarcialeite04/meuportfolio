function configurarRevelacoesEntrada(movimentoReduzido) {
  if (movimentoReduzido) return () => {};

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

export { configurarRevelacoesEntrada };
