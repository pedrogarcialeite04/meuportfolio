// Dados do Lab Visual e mídia extra da trajetória (quando houver vídeo de fundo)

const ITENS_LABORATORIO = [
  ["Shader study", "2025"], ["Grid drift", "2025"], ["Type scale", "2024"], ["Noise UI", "2024"],
  ["Chrome", "2023"], ["Porcelain", "2024"], ["GIF", "2024"], ["Japan", "2024"],
  ["Dark Mode", "2024"], ["Beachball", "2023"], ["Season", "2021"], ["Silverstone", "2020"],
  ["Season", "2019"], ["Basketball", "2022"], ["Las Vegas", "2023"], ["Race", "2023"],
];

const MIDIA_EXPANSAO_TRAJETORIA = {
  video: {
    src: "./videopg.mp4",
    poster: "",
    background: "./assets/images/imgfundo.webp",
    title: "Minha trajetória",
    date: "Front-end em evolução",
    scrollToExpand: "Role para ampliar",
    about: {
      overview:
        "Comecei focando em interfaces modernas e performáticas, evoluindo de landing pages para projetos mais completos, sempre priorizando experiência do usuário e qualidade visual.",
      conclusion:
        "Hoje transformo ideia em produto digital com atenção a detalhe, performance e motion, entregando experiências sólidas e prontas para escalar.",
    },
  },
};

export { ITENS_LABORATORIO, MIDIA_EXPANSAO_TRAJETORIA };
