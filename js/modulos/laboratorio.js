import { ITENS_LABORATORIO } from "../dados/laboratorio.js";

function configurarLaboratorio(movimentoReduzido) {
  const grid = document.getElementById("helmet-grid");
  const preloader = document.getElementById("helmets-preloader");
  const section = document.getElementById("lab");
  // Evita requests desnecessarias de imagens quando a secao Lab esta desativada.
  if (!grid || !section || section.hasAttribute("hidden")) return () => {};

  const cards = [];
  ITENS_LABORATORIO.forEach((helmet, idx) => {
    const num = `${idx + 1}`.padStart(2, "0");
    const card = document.createElement("article");
    card.className = "helmet-card";
    card.innerHTML = `
      <img src="./assets/images/helmets/image-helmet-${num}.webp" alt="${helmet[0]}">
      <img class="hover" src="./assets/images/helmets/image-helmet-hover-${num}.webp" alt="">
      <div class="helmet-meta">${helmet[0]} <strong>${helmet[1]}</strong></div>
    `;
    card.addEventListener("click", () => card.classList.toggle("active"));
    grid.appendChild(card);
    cards.push(card);
  });

  let st = null;
  if (preloader && section && !movimentoReduzido) {
    st = gsap.to(preloader, {
      yPercent: 14,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.55,
      },
    });
  }

  let cardBatch = [];
  if (!movimentoReduzido && cards.length) {
    gsap.set(cards, { autoAlpha: 0, y: 64, scale: 0.97 });
    cardBatch = ScrollTrigger.batch(cards, {
      interval: 0.05,
      batchMax: 4,
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.72,
          stagger: 0.04,
          ease: "power3.out",
        });
      },
      start: "top 86%",
      once: true,
    });
  }

  return () => {
    cardBatch.forEach((t) => t.kill());
    if (st) {
      st.scrollTrigger?.kill();
      st.kill();
    }
  };
}

export { configurarLaboratorio };
