function configurarPinStack(movimentoReduzido) {
  if (movimentoReduzido) return () => {};
  const section = document.getElementById("stack");
  const inner = section?.querySelector(".stack-pin-inner");
  if (!section || !inner) return () => {};

  /**
   * Com panel stack ativo em todas as telas, o pin do #stack passa a competir
   * com os paineis sticky e causa sobreposicoes e recortes.
   * Mantemos este setup como no-op para preservar o fluxo de scroll consistente.
   */
  return () => {};
}

export { configurarPinStack };
