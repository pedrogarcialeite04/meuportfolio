function configurarExpansaoTrajetoria(movimentoReduzido) {
  const video = document.getElementById("trajetoria-bg-video");
  if (!video) return () => {};

  const tryPlay = () => {
    const p = video.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {});
    }
  };

  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.controls = false;

  if (movimentoReduzido) {
    video.pause();
    return () => {};
  }

  tryPlay();

  const onVisibility = () => {
    if (document.hidden) {
      video.pause();
    } else {
      tryPlay();
    }
  };

  document.addEventListener("visibilitychange", onVisibility);

  return () => {
    document.removeEventListener("visibilitychange", onVisibility);
    video.pause();
  };
}

export { configurarExpansaoTrajetoria };
