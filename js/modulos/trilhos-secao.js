function configurarTrilhosSecao(movimentoReduzido) {
  if (movimentoReduzido) return () => {};
  const pairs = [
    ["scroll-rail-trajetoria", "trajetoria"],
  ];
  const triggers = pairs
    .map(([fillId, sectionId]) => {
      const fill = document.getElementById(fillId);
      const section = document.getElementById(sectionId);
      if (!fill || !section) return null;
      return ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        onUpdate: (self) => {
          gsap.set(fill, { scaleY: self.progress, transformOrigin: "top center" });
        },
      });
    })
    .filter(Boolean);
  return () => triggers.forEach((t) => t.kill());
}

export { configurarTrilhosSecao };
