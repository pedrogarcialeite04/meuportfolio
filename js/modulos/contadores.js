function configurarContadores(movimentoReduzido) {
  const els = gsap.utils.toArray("[data-count]");
  if (!els.length) return;

  const parseCountTarget = (el) => {
    const raw = el.dataset.count ?? "";
    const num = Number.parseFloat(String(raw).replace(/[^\d.]/g, ""));
    return Number.isFinite(num) ? num : NaN;
  };

  const formatPlain = (n, decimals) =>
    decimals > 0 ? n.toFixed(decimals) : String(Math.floor(n));

  const formatFinal = (n, decimals, usePlus) =>
    usePlus ? `+${formatPlain(n, decimals)}` : formatPlain(n, decimals);

  els.forEach((el) => {
    const target = parseCountTarget(el);
    if (Number.isNaN(target)) return;
    const decimals = Number.parseInt(el.dataset.decimals ?? "0", 10) || 0;
    const usePlus = !el.hasAttribute("data-count-no-plus");
    const obj = { value: 0 };
    const st = {
      trigger: el.closest("section") || el,
      start: "top 85%",
      once: true,
    };
    if (movimentoReduzido) {
      el.textContent = formatFinal(target, decimals, usePlus);
      return;
    }
    gsap.to(obj, {
      value: target,
      duration: 2.4,
      ease: "power2.out",
      scrollTrigger: st,
      onUpdate: () => {
        el.textContent = formatPlain(obj.value, decimals);
      },
      onComplete: () => {
        el.textContent = formatFinal(target, decimals, usePlus);
      },
    });
  });
}

export { configurarContadores };
