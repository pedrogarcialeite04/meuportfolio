function configurarProgressoScroll(movimentoReduzido) {
  if (movimentoReduzido) return () => {};
  const st = ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 0.2,
    onUpdate: (self) => {
      document.documentElement.style.setProperty("--scroll", self.progress.toFixed(4));
    },
  });
  return () => {
    st.kill();
    document.documentElement.style.removeProperty("--scroll");
  };
}

export { configurarProgressoScroll };
