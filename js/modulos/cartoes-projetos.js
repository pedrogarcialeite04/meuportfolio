import { PROJETOS } from "../dados/projetos.js";

function configurarCartoesProjetos(movimentoReduzido) {
  const container = document.getElementById("project-cards");
  if (!container) return;
  const stackedProjectsMq = window.matchMedia("(max-width: 1024px)");
  const isStackedProjectsView = stackedProjectsMq.matches;
  const videoModal = document.getElementById("video-modal");
  const videoPlayer = document.getElementById("video-modal-player");
  const videoCloseBtn = document.getElementById("video-modal-close");
  const videoBackdrop = videoModal?.querySelector("[data-video-close]");
  const projetosSection = document.getElementById("projetos");
  const projetosEyebrow = document.getElementById("projetos-heading");
  const projetosTitle = projetosSection?.querySelector(".projetos-title");
  const projetosLead = projetosSection?.querySelector(".projetos-lead");
  const cards = [];
  const cleanups = [];
  let lastFocus = null;
  const isVideoLink = (value) => /\.mp4(\?.*)?$/i.test(String(value || "").trim());

  const closeVideoModal = () => {
    if (!videoModal || !videoPlayer) return;
    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
    videoModal.hidden = true;
    videoModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-video-modal-open");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  const openVideoModal = (src, label, triggerEl) => {
    if (!videoModal || !videoPlayer || !src) return;
    lastFocus = triggerEl || null;
    videoPlayer.src = src;
    videoPlayer.setAttribute("aria-label", `Video do projeto ${label}`);
    videoModal.hidden = false;
    videoModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-video-modal-open");
    const playPromise = videoPlayer.play();
    if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
  };

  if (videoCloseBtn) {
    const onCloseClick = () => closeVideoModal();
    videoCloseBtn.addEventListener("click", onCloseClick);
    cleanups.push(() => videoCloseBtn.removeEventListener("click", onCloseClick));
  }

  if (videoBackdrop) {
    const onBackdropClick = () => closeVideoModal();
    videoBackdrop.addEventListener("click", onBackdropClick);
    cleanups.push(() => videoBackdrop.removeEventListener("click", onBackdropClick));
  }

  const onEscCloseVideo = (e) => {
    if (e.key === "Escape") closeVideoModal();
  };
  document.addEventListener("keydown", onEscCloseVideo);
  cleanups.push(() => document.removeEventListener("keydown", onEscCloseVideo));

  const grid = document.createElement("div");
  grid.className = "project-showcase-grid";
  container.replaceChildren(grid);

  const applyProjectsLayoutMode = () => {
    const width = window.innerWidth || 0;
    grid.classList.remove("project-showcase-grid--desktop", "project-showcase-grid--tablet", "project-showcase-grid--mobile");
    if (width <= 900) {
      grid.classList.add("project-showcase-grid--mobile");
      return;
    }
    if (width <= 1200) {
      grid.classList.add("project-showcase-grid--tablet");
      return;
    }
    grid.classList.add("project-showcase-grid--desktop");
  };

  applyProjectsLayoutMode();
  const onProjectsViewportChange = () => applyProjectsLayoutMode();
  window.addEventListener("resize", onProjectsViewportChange, { passive: true });
  cleanups.push(() => window.removeEventListener("resize", onProjectsViewportChange));

  PROJETOS.forEach((project, index) => {
    const [name, year, role, tags, image, link] = project;
    const card = document.createElement("article");
    const isFeatured = index === 1;
    card.className = `project-showcase-card${isFeatured ? " project-showcase-card--featured" : ""}`;
    card.setAttribute("tabindex", "0");
    card.style.setProperty("--card-index", String(index));

    const media = document.createElement("figure");
    media.className = "project-showcase-card__media";

    const img = document.createElement("img");
    img.src = image;
    img.alt = `Preview do projeto ${name}`;
    img.loading = "lazy";
    img.decoding = "async";
    media.appendChild(img);

    const caption = document.createElement("figcaption");
    caption.className = "project-showcase-card__caption";

    const title = document.createElement("h3");
    title.textContent = name;

    const meta = document.createElement("p");
    meta.className = "project-showcase-card__meta";
    meta.textContent = `${role} Â· ${year}`;

    const tagsRow = document.createElement("div");
    tagsRow.className = "project-showcase-card__tags";
    (tags || []).forEach((tag) => {
      const chip = document.createElement("span");
      chip.textContent = tag;
      tagsRow.appendChild(chip);
    });

    const cta = document.createElement("a");
    cta.className = "project-showcase-card__cta";
    cta.href = link || "#";
    if (!isVideoLink(link)) {
      cta.target = "_blank";
      cta.rel = "noreferrer";
    }
    cta.textContent = "Ver mais";
    cta.setAttribute("aria-label", `Ver mais sobre ${name}`);
    cta.addEventListener("click", (e) => {
      if (!isVideoLink(link)) return;
      e.preventDefault();
      openVideoModal(link, name, cta);
    });

    caption.append(title, meta, tagsRow, cta);
    card.append(media, caption);
    grid.appendChild(card);
    cards.push(card);
  });

  if (movimentoReduzido || isStackedProjectsView || !cards.length) {
    return () => cleanups.forEach((cleanup) => cleanup());
  }

  let introTimeline = null;
  if (projetosSection) {
    const introTargets = [projetosEyebrow, projetosTitle, projetosLead].filter(Boolean);
    if (introTargets.length) {
      introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: projetosSection,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });
      introTimeline
        .from(introTargets, {
          autoAlpha: 0,
          y: 36,
          duration: 0.72,
          stagger: 0.09,
          ease: "power3.out",
        })
        .from(
          grid,
          {
            autoAlpha: 0,
            y: 28,
            duration: 0.78,
            ease: "power3.out",
          },
          "-=0.45",
        );
    }
  }

  gsap.set(cards, { autoAlpha: 0, y: 70, scale: 0.97 });
  const batch = ScrollTrigger.batch(cards, {
    interval: 0.1,
    batchMax: 2,
    start: "top 88%",
    once: true,
    onEnter: (entered) => {
      gsap.to(entered, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.86,
        stagger: 0.08,
        ease: "power3.out",
        overwrite: "auto",
      });
    },
  });

  return () => {
    if (introTimeline) {
      introTimeline.scrollTrigger?.kill();
      introTimeline.kill();
    }
    batch.forEach((trigger) => trigger.kill());
    cleanups.forEach((cleanup) => cleanup());
  };
}

export { configurarCartoesProjetos };
