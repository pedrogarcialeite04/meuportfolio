function configurarIntroPagina(movimentoReduzido) {
  const sections = gsap.utils.toArray("main > section");
  const header = document.querySelector(".header");
  if (movimentoReduzido || !sections.length) return () => {};

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from(header, { y: -36, autoAlpha: 0, duration: 0.72 }, 0);
  tl.from(sections[0], { y: 28, autoAlpha: 0.96, duration: 0.75 }, 0.08);

  return () => {
    tl.kill();
    if (header) gsap.set(header, { clearProps: "transform,opacity" });
  };
}

export { configurarIntroPagina };
