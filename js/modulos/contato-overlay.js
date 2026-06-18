function configurarOverlayContato(movimentoReduzido) {
  const contatoSection = document.getElementById("contato");
  if (!contatoSection) return () => {};
  const contatoShell = contatoSection.querySelector(".contato-overlay-shell");

  if (movimentoReduzido) {
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

export { configurarOverlayContato };
