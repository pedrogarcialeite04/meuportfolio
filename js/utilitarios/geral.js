// Funções utilitárias usadas em vários módulos do portfólio
// Aqui ficam coisas genéricas: scroll, performance, observadores, etc.

// Verifica se o usuário pediu menos animação no sistema operacional
function prefereMovimentoReduzido() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Media queries reutilizadas para decidir se liga efeitos pesados
const mqPerformanceMobile = window.matchMedia("(max-width: 768px)");
const mqPerformanceToqueGrosso = window.matchMedia("(pointer: coarse)");

// Detecta economia de dados ou conexão muito lenta (2G)
function economiaDadosOuRedeLenta() {
  const conn = navigator.connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  const t = conn.effectiveType;
  return t === "slow-2g" || t === "2g";
}

// Ajusta o DPR do canvas: mais nitidez no desktop, menos GPU no mobile
function obterDprIdealCanvas(maxDesktop = 2, maxMobile = 1.35) {
  const cap = mqPerformanceMobile.matches || mqPerformanceToqueGrosso.matches ? maxMobile : maxDesktop;
  if (economiaDadosOuRedeLenta()) return Math.min(1, cap);
  if (typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4) {
    return Math.min(mqPerformanceMobile.matches ? 1 : 1.25, cap);
  }
  return Math.min(window.devicePixelRatio || 1, cap);
}

// Escuta quando a aba fica oculta — útil para pausar animações
function vincularDocumentoOculto(aoMudar) {
  let oculto = document.hidden;
  const aoVisibilidade = () => {
    oculto = document.hidden;
    aoMudar(oculto);
  };
  document.addEventListener("visibilitychange", aoVisibilidade);
  return () => document.removeEventListener("visibilitychange", aoVisibilidade);
}

// Pausa loops pesados quando o elemento sai da tela
function observarVisibilidade(elemento, aoMudar, margemRaiz = "80px 0px") {
  if (!elemento || typeof IntersectionObserver === "undefined") return () => {};
  let visivel = true;
  const observador = new IntersectionObserver(
    (entradas) => {
      const proximo = entradas.some((e) => e.isIntersecting);
      if (proximo !== visivel) {
        visivel = proximo;
        aoMudar(visivel);
      }
    },
    { threshold: 0, rootMargin: margemRaiz },
  );
  observador.observe(elemento);
  return () => observador.disconnect();
}

// Calcula o topo absoluto de um elemento na página
function obterTopoAbsoluto(elemento) {
  let topo = 0;
  let no = elemento;
  while (no) {
    topo += no.offsetTop || 0;
    no = no.offsetParent;
  }
  return topo;
}

// Posição de scroll correta ao clicar em link com hash (#sobre, #projetos...)
function obterScrollTopoHash(alvo, offsetCabecalho) {
  const margemScrollBruta = window.getComputedStyle(alvo).scrollMarginTop || "0";
  const margemScroll = Number.parseFloat(margemScrollBruta) || 0;
  const offset = Math.max(offsetCabecalho, margemScroll);
  const topoAbsoluto = alvo.getBoundingClientRect().top + window.scrollY;
  return Math.max(0, topoAbsoluto - offset);
}

export {
  prefereMovimentoReduzido,
  mqPerformanceMobile,
  mqPerformanceToqueGrosso,
  economiaDadosOuRedeLenta,
  obterDprIdealCanvas,
  vincularDocumentoOculto,
  observarVisibilidade,
  obterTopoAbsoluto,
  obterScrollTopoHash,
};
