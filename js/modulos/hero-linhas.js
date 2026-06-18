import { vincularDocumentoOculto, observarVisibilidade } from "../utilitarios/geral.js";

function configurarParallaxLinhasHero(movimentoReduzido) {
  const hero = document.getElementById("hero");
  if (!hero || movimentoReduzido) return () => {};

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = 0;
  let heroInView = true;

  const needsTick = () =>
    heroInView &&
    !document.hidden &&
    (Math.abs(targetX - currentX) > 0.0008 ||
      Math.abs(targetY - currentY) > 0.0008 ||
      targetX !== 0 ||
      targetY !== 0);

  const tick = () => {
    rafId = 0;
    if (!heroInView || document.hidden) return;

    currentX += (targetX - currentX) * 0.055;
    currentY += (targetY - currentY) * 0.055;
    hero.style.setProperty("--hero-line-shift-x", `${(currentX * 11).toFixed(2)}px`);
    hero.style.setProperty("--hero-line-shift-y", `${(currentY * 7).toFixed(2)}px`);
    hero.style.setProperty("--hero-line-ghost-x", `${(-currentX * 18).toFixed(2)}px`);
    hero.style.setProperty("--hero-line-ghost-y", `${(-currentY * 12).toFixed(2)}px`);

    if (needsTick()) rafId = requestAnimationFrame(tick);
  };

  const ensureTick = () => {
    if (!rafId && needsTick()) rafId = requestAnimationFrame(tick);
  };

  const onPointerMove = (e) => {
    if (!heroInView) return;
    const rect = hero.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      targetX = 0;
      targetY = 0;
      ensureTick();
      return;
    }
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    ensureTick();
  };

  const onPointerLeave = () => {
    targetX = 0;
    targetY = 0;
    ensureTick();
  };

  const unvincularDocumentoOculto = vincularDocumentoOculto(() => {
    if (document.hidden && rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    } else {
      ensureTick();
    }
  });

  const unbindInView = observarVisibilidade(
    hero,
    (inView) => {
      heroInView = inView;
      if (inView) ensureTick();
      else if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    },
    "120px 0px",
  );

  ensureTick();
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  hero.addEventListener("pointerleave", onPointerLeave);

  const st = ScrollTrigger.create({
    trigger: hero,
    start: "top top",
    end: "bottom top",
    scrub: 0.45,
    onUpdate: (self) => {
      hero.style.setProperty("--hero-scroll", self.progress.toFixed(4));
    },
  });

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    unvincularDocumentoOculto();
    unbindInView();
    window.removeEventListener("pointermove", onPointerMove);
    hero.removeEventListener("pointerleave", onPointerLeave);
    st.kill();
    hero.style.removeProperty("--hero-line-shift-x");
    hero.style.removeProperty("--hero-line-shift-y");
    hero.style.removeProperty("--hero-line-ghost-x");
    hero.style.removeProperty("--hero-line-ghost-y");
    hero.style.removeProperty("--hero-scroll");
  };
}

export { configurarParallaxLinhasHero };
