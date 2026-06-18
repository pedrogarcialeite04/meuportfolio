function configurarCartoesTilt(movimentoReduzido) {
  const cards = Array.from(document.querySelectorAll(".js-tilt-card"));
  if (!cards.length) return () => {};

  const states = cards.map((card) => ({
    card,
    glare: card.querySelector(".footer-cta-glare"),
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    glareTargetX: 50,
    glareTargetY: 50,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
    active: false,
  }));

  const maxTiltX = 10;
  const maxTiltY = 10;
  const stiffness = 150;
  const damping = 20;
  let previousTime = performance.now();

  const onMoveFactory = (state) => (event) => {
    const rect = state.card.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const relX = (event.clientX - rect.left) / rect.width;
    const relY = (event.clientY - rect.top) / rect.height;
    const nx = Math.max(-1, Math.min(1, relX * 2 - 1));
    const ny = Math.max(-1, Math.min(1, relY * 2 - 1));

    state.targetX = nx;
    state.targetY = ny;
    state.glareTargetX = relX * 100;
    state.glareTargetY = relY * 100;
    state.active = true;
  };

  const onLeaveFactory = (state) => () => {
    state.targetX = 0;
    state.targetY = 0;
    state.glareTargetX = 50;
    state.glareTargetY = 50;
    state.active = false;
  };

  if (movimentoReduzido) {
    states.forEach((state) => {
      state.onMove = onMoveFactory(state);
      state.onLeave = onLeaveFactory(state);
      state.card.addEventListener("mousemove", state.onMove);
      state.card.addEventListener("mouseleave", state.onLeave);
    });
    return () => {
      states.forEach((state) => {
        state.card.removeEventListener("mousemove", state.onMove);
        state.card.removeEventListener("mouseleave", state.onLeave);
      });
    };
  }

  const tick = () => {
    const now = performance.now();
    const dt = Math.min(0.034, (now - previousTime) / 1000);
    previousTime = now;
    const smoothing = Math.min(1, 0.12 * gsap.ticker.deltaRatio(60));
    let anyMotion = false;

    states.forEach((state) => {
      const forceX = stiffness * (state.targetX - state.currentX);
      const forceY = stiffness * (state.targetY - state.currentY);

      state.velocityX += (forceX - damping * state.velocityX) * dt;
      state.velocityY += (forceY - damping * state.velocityY) * dt;
      state.currentX += state.velocityX * dt;
      state.currentY += state.velocityY * dt;

      const rotateX = -state.currentY * maxTiltX;
      const rotateY = state.currentX * maxTiltY;

      state.glareX += (state.glareTargetX - state.glareX) * smoothing;
      state.glareY += (state.glareTargetY - state.glareY) * smoothing;
      state.glareOpacity += ((state.active ? 0.85 : 0) - state.glareOpacity) * smoothing;

      state.card.style.transform = `rotateX(${rotateX.toFixed(3)}deg) rotateY(${rotateY.toFixed(3)}deg)`;

      if (state.glare) {
        state.glare.style.setProperty("--glare-x", `${state.glareX.toFixed(2)}%`);
        state.glare.style.setProperty("--glare-y", `${state.glareY.toFixed(2)}%`);
        state.glare.style.opacity = state.glareOpacity.toFixed(3);
      }

      if (
        state.active ||
        Math.abs(state.targetX - state.currentX) > 0.004 ||
        Math.abs(state.targetY - state.currentY) > 0.004 ||
        Math.abs(state.velocityX) > 0.02 ||
        Math.abs(state.velocityY) > 0.02
      ) {
        anyMotion = true;
      }
    });

    if (!anyMotion) {
      gsap.ticker.remove(tick);
      tiltTickerOn = false;
    }
  };

  let tiltTickerOn = false;
  const ensureTiltTicker = () => {
    if (!tiltTickerOn) {
      gsap.ticker.add(tick);
      tiltTickerOn = true;
    }
  };

  states.forEach((state) => {
    const baseMove = onMoveFactory(state);
    const baseLeave = onLeaveFactory(state);
    state.onMove = (event) => {
      baseMove(event);
      ensureTiltTicker();
    };
    state.onLeave = () => {
      baseLeave();
      ensureTiltTicker();
    };
    state.card.addEventListener("mousemove", state.onMove);
    state.card.addEventListener("mouseleave", state.onLeave);
  });

  return () => {
    if (tiltTickerOn) gsap.ticker.remove(tick);
    states.forEach((state) => {
      state.card.removeEventListener("mousemove", state.onMove);
      state.card.removeEventListener("mouseleave", state.onLeave);
      state.card.style.removeProperty("transform");
      if (state.glare) {
        state.glare.style.removeProperty("--glare-x");
        state.glare.style.removeProperty("--glare-y");
        state.glare.style.removeProperty("opacity");
      }
    });
  };
}

export { configurarCartoesTilt };
