function configurarPainelStack(movimentoReduzido) {
  if (movimentoReduzido) return () => {};
  if (!document.getElementById("main-content")) return () => {};

  document.body.classList.add("panel-stack-active");
  requestAnimationFrame(() => ScrollTrigger.refresh());
  return () => {
    document.body.classList.remove("panel-stack-active");
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };
}

export { configurarPainelStack };
