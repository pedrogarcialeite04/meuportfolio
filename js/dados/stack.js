// Lista de tags que aparecem nos projetos — usada no marquee da seção Stack
import { PROJETOS } from "./projetos.js";

/** Tags únicas dos freelances, ordem de aparição, com rótulos para o marquee */
const ROTULOS_TAGS_STACK = {
  "landing page": "Landing Page",
  ui: "UI",
  tailwindcss: "Tailwind",
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  gsap: "GSAP",
  scrolltrigger: "ScrollTrigger",
  site: "Site",
  "responsividade mobile": "Mobile",
  "three.js": "Three.js",
  "full stack": "Full Stack",
  "node.js": "Node.js",
  mongodb: "MongoDB",
  design: "Design",
  "front-end": "Front-end",
  "back-end": "Back-end",
};

function montarStackDosProjetos() {
  const seen = new Set();
  const out = [];
  const push = (label, key) => {
    const k = key ?? String(label).trim().toLowerCase();
    if (!k || seen.has(k)) return;
    seen.add(k);
    out.push(label);
  };

  push("TypeScript", "typescript");
  push("React", "react");

  for (const [, , , tags] of PROJETOS) {
    for (const raw of tags || []) {
      const key = String(raw).trim().toLowerCase();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      out.push(ROTULOS_TAGS_STACK[key] || String(raw).trim());
    }
  }
  return out;
}

const STACK = [
  "TypeScript",
  "React",
  "JavaScript",
  "CSS",
  "HTML",
  "GSAP",
  "ScrollTrigger",
  "Three.js",
  "Node.js",
  "MongoDB",
  "UI",
  "Performance",
];

const SLUG_ICONE_POR_ROTULO = {
  TypeScript: "typescript",
  React: "react",
  Tailwind: "tailwindcss",
  JavaScript: "javascript",
  HTML: "html5",
  CSS: "css",
  GSAP: "greensock",
  ScrollTrigger: "greensock",
  Site: "googlechrome",
  Mobile: "android",
  "Three.js": "threedotjs",
  "Full Stack": "stackblitz",
  "Node.js": "nodedotjs",
  MongoDB: "mongodb",
  Design: "figma",
  "Front-end": "frontendmentor",
  "Back-end": "serverless",
  UI: "storybook",
  "Landing Page": "googlechrome",
  Performance: "lighthouse",
};

export { ROTULOS_TAGS_STACK, montarStackDosProjetos, STACK, SLUG_ICONE_POR_ROTULO };
