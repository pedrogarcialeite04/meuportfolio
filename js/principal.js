// Ponto de entrada do portfólio — carrega todos os módulos
import { prefereMovimentoReduzido } from "./utilitarios/geral.js";
import { configurarMenu } from "./modulos/menu.js";
import { configurarMascaraHero } from "./modulos/hero-mascara.js";
import { configurarParallaxLinhasHero } from "./modulos/hero-linhas.js";
import { configurarCartoesTilt } from "./modulos/cartoes-tilt.js";
import { configurarIntroPagina } from "./modulos/intro-pagina.js";
import { configurarProgressoScroll } from "./modulos/progresso-scroll.js";
import { configurarTrilhosSecao } from "./modulos/trilhos-secao.js";
import { configurarParallaxCamadas } from "./modulos/parallax-camadas.js";
import { configurarPinStack } from "./modulos/stack-pin.js";
import { configurarPainelStack } from "./modulos/painel-stack.js";
import { configurarRevelacoesEntrada } from "./modulos/revelacoes-entrada.js";
import { configurarContadores } from "./modulos/contadores.js";
import { configurarDestaquesScroll } from "./modulos/destaques-scroll.js";
import { configurarCartoesProjetos } from "./modulos/cartoes-projetos.js";
import { configurarOverlayContato } from "./modulos/contato-overlay.js";
import { configurarFooterContato } from "./modulos/contato-footer.js";
import { configurarMarqueeStack } from "./modulos/marquee-stack.js";
import { configurarExpansaoTrajetoria } from "./modulos/trajetoria-video.js";
import { configurarLaboratorio } from "./modulos/laboratorio.js";
import { configurarFumacaHero } from "./modulos/hero-fumaca.js";
import { configurarCamadasEfeitos } from "./modulos/efeitos-camadas.js";
import { configurarSkewVelocidade } from "./modulos/skew-velocidade.js";
import { configurarBotoesMagneticos } from "./modulos/botoes-magneticos.js";
import { configurarParallaxImersivo } from "./modulos/parallax-imersivo.js";
import { configurarSegurancaReveal } from "./modulos/seguranca-reveal.js";

// Função principal que liga tudo quando a página carrega
function iniciar() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.error("[portfólio] GSAP ou ScrollTrigger não carregou. Verifique a conexão com a CDN.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const movimentoReduzido = prefereMovimentoReduzido();
  const limpadores = [];

  if (!movimentoReduzido && typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });
  }
  if (!movimentoReduzido && typeof gsap !== "undefined") {
    gsap.ticker.lagSmoothing(500, 33);
  }

  const contexto = gsap.context(() => {
    limpadores.push(configurarMenu(movimentoReduzido));
    limpadores.push(configurarMascaraHero(movimentoReduzido));
    limpadores.push(configurarParallaxLinhasHero(movimentoReduzido));
    limpadores.push(configurarCartoesTilt(movimentoReduzido));
    limpadores.push(configurarIntroPagina(movimentoReduzido));
    limpadores.push(configurarProgressoScroll(movimentoReduzido));
    limpadores.push(configurarTrilhosSecao(movimentoReduzido));
    limpadores.push(configurarParallaxCamadas(movimentoReduzido));
    limpadores.push(configurarPinStack(movimentoReduzido));
    limpadores.push(configurarPainelStack(movimentoReduzido));
    limpadores.push(configurarRevelacoesEntrada(movimentoReduzido));
    configurarContadores(movimentoReduzido);
    configurarDestaquesScroll(movimentoReduzido);
    const limpadorProjetos = configurarCartoesProjetos(movimentoReduzido);
    if (typeof limpadorProjetos === "function") limpadores.push(limpadorProjetos);
    limpadores.push(configurarSkewVelocidade(movimentoReduzido));
    limpadores.push(configurarOverlayContato(movimentoReduzido));
    limpadores.push(configurarFooterContato(movimentoReduzido));
    limpadores.push(configurarMarqueeStack(movimentoReduzido));
    limpadores.push(configurarExpansaoTrajetoria(movimentoReduzido));
    const secaoLab = document.getElementById("lab");
    if (secaoLab && !secaoLab.hasAttribute("hidden")) {
      limpadores.push(configurarLaboratorio(movimentoReduzido));
    }
    limpadores.push(configurarFumacaHero(movimentoReduzido));
    limpadores.push(configurarCamadasEfeitos(movimentoReduzido));
    limpadores.push(configurarBotoesMagneticos(movimentoReduzido));
    limpadores.push(configurarParallaxImersivo(movimentoReduzido));
    limpadores.push(configurarSegurancaReveal());
  }, document.body);

  if (!movimentoReduzido) {
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }

  window.addEventListener(
    "beforeunload",
    () => {
      limpadores.forEach((fn) => typeof fn === "function" && fn());
      contexto.revert();
    },
    { once: true },
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciar);
} else {
  iniciar();
}
