// â€”â€” Skew por velocidade de scroll (toque Awwwards) na grade de projetos â€”â€”
function configurarSkewVelocidade(movimentoReduzido) {
  if (movimentoReduzido) return () => {};
  if (window.matchMedia("(pointer: coarse)").matches) return () => {};
  const grid = document.querySelector(".project-showcase-grid");
  if (!grid) return () => {};

  let lastY = window.scrollY || 0;
  let skew = 0;
  let target = 0;
  let rafId = 0;

  const loop = () => {
    skew += (target - skew) * 0.12;
    target *= 0.86;
    grid.style.setProperty("--grid-skew", `${skew.toFixed(3)}deg`);
    if (Math.abs(skew) > 0.01 || Math.abs(target) > 0.01) {
      rafId = requestAnimationFrame(loop);
    } else {
      grid.style.setProperty("--grid-skew", "0deg");
      rafId = 0;
    }
  };
  const onScroll = () => {
    const y = window.scrollY || 0;
    const v = y - lastY;
    lastY = y;
    target = Math.max(-2.4, Math.min(2.4, v * 0.06));
    if (!rafId) rafId = requestAnimationFrame(loop);
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
    if (rafId) cancelAnimationFrame(rafId);
    grid.style.setProperty("--grid-skew", "0deg");
  };
}

export { configurarSkewVelocidade };
