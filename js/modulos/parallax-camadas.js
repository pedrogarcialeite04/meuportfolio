function configurarParallaxCamadas(movimentoReduzido) {
  if (movimentoReduzido) return () => {};
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

export { configurarParallaxCamadas };
