// â€”â€” FX surreais: camadas de fundo, barra de progresso e grÃ£o â€”â€”
function configurarCamadasEfeitos(movimentoReduzido) {
  const body = document.body;
  const created = [];

  const bar = document.createElement("div");
  bar.className = "fx-scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  body.appendChild(bar);
  created.push(bar);

  // Em reduced-motion o configurarProgressoScroll nÃ£o escreve --scroll; garantimos a barra aqui.
  let onScrollVar = null;
  if (movimentoReduzido) {
    onScrollVar = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight || 1;
      const p = Math.min(1, Math.max(0, (window.scrollY || 0) / max));
      doc.style.setProperty("--scroll", p.toFixed(4));
    };
    window.addEventListener("scroll", onScrollVar, { passive: true });
    window.addEventListener("resize", onScrollVar);
    onScrollVar();
  } else {
    // Orbs (blur pesado) e grÃ£o animado sÃ³ no desktop com ponteiro fino: poupa
    // bateria/GPU em mobile sem remover os efeitos onde fazem diferenÃ§a.
    const heavyFxOk =
      window.matchMedia("(min-width: 768px)").matches &&
      window.matchMedia("(pointer: fine)").matches;

    if (heavyFxOk) {
      const grain = document.createElement("div");
      grain.className = "fx-grain";
      grain.setAttribute("aria-hidden", "true");
      body.appendChild(grain);
      created.push(grain);

      const orbs = document.createElement("div");
      orbs.className = "fx-orbs";
      orbs.setAttribute("aria-hidden", "true");
      orbs.innerHTML =
        '<span class="fx-orb fx-orb--1"></span><span class="fx-orb fx-orb--2"></span><span class="fx-orb fx-orb--3"></span>';
      body.appendChild(orbs);
      created.push(orbs);
    }
  }

  return () => {
    if (onScrollVar) {
      window.removeEventListener("scroll", onScrollVar);
      window.removeEventListener("resize", onScrollVar);
    }
    created.forEach((el) => el.remove());
  };
}

export { configurarCamadasEfeitos };
