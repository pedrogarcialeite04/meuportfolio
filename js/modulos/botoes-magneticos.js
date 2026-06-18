// â€”â€” BotÃµes magnÃ©ticos â€”â€”
function configurarBotoesMagneticos(movimentoReduzido) {
  if (movimentoReduzido) return () => {};
  if (!window.matchMedia("(pointer: fine)").matches) return () => {};
  const selector = [".hero-mask-lock", ".footer-cta-action"].join(", ");
  const els = Array.from(document.querySelectorAll(selector));
  if (!els.length) return () => {};

  const cleanups = [];
  els.forEach((el) => {
    el.classList.add("fx-magnetic");
    const strength = 0.34;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.5, ease: "power3.out", overwrite: "auto" });
    };
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)", overwrite: "auto" });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    cleanups.push(() => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      gsap.set(el, { clearProps: "transform" });
      el.classList.remove("fx-magnetic");
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

export { configurarBotoesMagneticos };
