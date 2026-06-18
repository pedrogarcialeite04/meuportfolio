import { STACK, SLUG_ICONE_POR_ROTULO } from "../dados/stack.js";
import { vincularDocumentoOculto, observarVisibilidade } from "../utilitarios/geral.js";

function configurarMarqueeStack(movimentoReduzido) {
  const track = document.getElementById("marquee-track");
  const wrap = document.getElementById("partners-marquee");
  if (!track || !wrap) return () => {};

  const fragment = document.createDocumentFragment();
  const normalizeLabel = (label) => String(label).trim();
  const getIconSlug = (label) => SLUG_ICONE_POR_ROTULO[normalizeLabel(label)] || null;

  const addChips = (list) => {
    list.forEach((b) => {
      const chip = document.createElement("span");
      chip.className = "brand-chip";

      const iconWrap = document.createElement("span");
      iconWrap.className = "brand-chip__icon";
      const slug = getIconSlug(b);
      if (slug) {
        const img = document.createElement("img");
        img.loading = "lazy";
        img.decoding = "async";
        img.alt = "";
        img.src = `https://cdn.simpleicons.org/${slug}/D2FF00`;
        img.onerror = () => {
          img.remove();
          iconWrap.textContent = String(b).trim().charAt(0).toUpperCase();
          iconWrap.classList.add("brand-chip__icon--fallback");
        };
        iconWrap.appendChild(img);
      } else {
        iconWrap.textContent = String(b).trim().charAt(0).toUpperCase();
        iconWrap.classList.add("brand-chip__icon--fallback");
      }

      const label = document.createElement("span");
      label.className = "brand-chip__label";
      label.textContent = b;

      chip.append(iconWrap, label);
      fragment.appendChild(chip);
    });
  };
  addChips(STACK);
  addChips(STACK);
  addChips(STACK);
  track.appendChild(fragment);

  let direction = 1;
  let baseSpeed = 0.46;
  let speedBoost = 1;
  let x = 0;
  let contentWidth = track.offsetWidth;

  const measure = () => {
    contentWidth = track.offsetWidth;
  };
  measure();

  const tick = () => {
    x += (baseSpeed * speedBoost) * direction;
    if (x <= -contentWidth / 3) x += contentWidth / 3;
    if (x >= 0) x -= contentWidth / 3;
    gsap.set(track, { x });
  };

  let marqueeTickerOn = false;
  let marqueeInView = true;
  const syncMarqueeTicker = () => {
    const shouldRun = !movimentoReduzido && marqueeInView && !document.hidden;
    if (shouldRun && !marqueeTickerOn) {
      gsap.ticker.add(tick);
      marqueeTickerOn = true;
    } else if (!shouldRun && marqueeTickerOn) {
      gsap.ticker.remove(tick);
      marqueeTickerOn = false;
    }
  };

  const unbindMarqueeInView = observarVisibilidade(wrap, (inView) => {
    marqueeInView = inView;
    syncMarqueeTicker();
  }, "160px 0px");
  const unbindMarqueeDocHidden = vincularDocumentoOculto(() => syncMarqueeTicker());

  const onMouseEnter = () => {
    speedBoost = 1.55;
  };

  const onMouseLeave = () => {
    speedBoost = 1;
  };

  if (!movimentoReduzido) {
    syncMarqueeTicker();
    wrap.addEventListener("mouseenter", onMouseEnter);
    wrap.addEventListener("mouseleave", onMouseLeave);
  }

  const st = ScrollTrigger.create({
    trigger: wrap,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      direction = self.direction === 1 ? 1 : -1;
    },
  });

  const onResize = () => measure();
  window.addEventListener("resize", onResize);

  return () => {
    if (!movimentoReduzido) {
      if (marqueeTickerOn) gsap.ticker.remove(tick);
      unbindMarqueeInView();
      unbindMarqueeDocHidden();
      wrap.removeEventListener("mouseenter", onMouseEnter);
      wrap.removeEventListener("mouseleave", onMouseLeave);
    }
    st.kill();
    window.removeEventListener("resize", onResize);
  };
}

export { configurarMarqueeStack };
