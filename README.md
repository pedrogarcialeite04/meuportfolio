# Pedro Garcia Portfolio

Portfolio front-end autoral com foco em direcao de arte digital, interatividade, motion design e percepcao de performance. O projeto foi construido como uma landing page editorial de apresentacao profissional, combinando composicao visual forte, animacoes com scroll, efeitos de profundidade, glassmorphism, background 3D e interacoes refinadas para transmitir identidade, repertorio tecnico e acabamento premium.

## Visao Geral

Este projeto e uma pagina estatica de portfolio pessoal desenvolvida para apresentar:

- identidade visual;
- stack tecnica;
- trajetoria profissional;
- projetos selecionados;
- canais de contato.

Mais do que uma pagina institucional, o site foi pensado como uma experiencia visual. Cada secao tem um papel claro na narrativa:

- o `hero` estabelece impacto visual imediato;
- a area `sobre` reforca posicionamento e credibilidade;
- a secao `stack` comunica repertorio tecnico com movimento continuo;
- `trajetoria` funciona como bloco editorial e biografico;
- `projetos` apresenta repertorio com tratamento de showcase;
- `contato` fecha a experiencia com uma composicao de campanha.

## Stack Utilizada

### Base do projeto

- `HTML5` para estrutura semantica da pagina.
- `CSS3` para layout, identidade visual, responsividade, efeitos visuais e microinteracoes.
- `JavaScript` puro para comportamento, montagem dinamica de secoes e controle de animacoes.

### Bibliotecas e recursos externos

- `GSAP 3.12.5` para animacoes de entrada, hover, parallax e timelines.
- `ScrollTrigger` para animacoes vinculadas ao scroll, batching, pinning e sincronizacao entre secoes.
- `Three.js 0.162.0` para o fundo 3D em canvas com geometria wireframe e particulas.
- `Google Fonts` com a familia `Mona Sans`.

### Recursos locais

- Fonte local `Brier` para contraste editorial e destaque tipografico.
- Fonte local `BungeeCustom` para titulos de alto impacto e assinatura visual.
- Imagens raster para hero, menu, projetos e contato.
- `SVG filters`, `mask`, `clip-path` e `data URI SVG` para efeitos personalizados sem dependencia adicional.

## Arquitetura do Projeto

```text
TEXTE/
├── index.html
├── styles.css
├── script.js
└── assets/
```

### Papel de cada arquivo

- `index.html`: estrutura principal da pagina, secoes, containers de animacao, carregamento das bibliotecas externas e pontos de montagem dinamica.
- `styles.css`: sistema visual completo, tokens de cor, tipografia, layout, responsividade, estados interativos e praticamente todos os efeitos de superficie.
- `script.js`: dados dos projetos, inicializacao do site, montagem dinamica de componentes e logica de animacao/interacao.

## Conceito de Design

O design mistura referencias de:

- interfaces editoriais;
- campanhas premium de produto;
- UI escura com acento neon;
- composicoes inspiradas em showcase visual;
- camadas com profundidade, vidro e luz.

### Direcao visual

- Base escura com `preto`, `verde-musgo` e variações de `surface`.
- Cor de acento `lime/neon` (`#d2ff00`) usada para foco, contraste, energia e assinatura.
- Tipografia com contraste intencional:
  - `Mona Sans` para corpo, UI e navegacao;
  - `Brier` para enfases editoriais;
  - `BungeeCustom` para titulos de alto impacto.
- Mistura de superficies solidas, vidro fosco, gradientes, noise sutil e overlays de luz.

### Linguagem de interface

- visual premium;
- alto contraste;
- grande uso de caixa alta;
- espacamento respirado;
- bordas com brilho sutil;
- destaque por hover e movimento;
- hierarquia muito guiada por tipografia e motion.

## Efeitos Visuais e Como Foram Usados

Esta secao descreve exatamente os efeitos presentes no projeto e sua funcao.

### 1. Fundo 3D em canvas com `Three.js`

O site possui um `canvas` fixo de fundo (`#three-bg`) que fica atras do conteudo principal.

#### Como foi feito

- Foi criado um `WebGLRenderer` com `alpha: true`.
- A cena usa:
  - um `TorusKnotGeometry` em `wireframe`;
  - um conjunto de particulas com `BufferGeometry` e `PointsMaterial`.
- A camera recebe ajuste dinamico de profundidade conforme o scroll.
- O objeto 3D gira continuamente em `x`, `y` e `z`.
- A opacidade e movimento das particulas tambem variam ao longo da pagina.

#### Objetivo visual

- criar sensacao de profundidade;
- dar aspecto tecnologico;
- manter o site vivo mesmo em areas mais estaticas;
- reforcar o posicionamento de portfolio de desenvolvimento moderno.

#### Comportamento especial

Na secao de projetos o fundo 3D e desligado visualmente com a classe `three-off-projects`, reduzindo ruido de fundo e preservando leitura do showcase.

### 2. Hero com mascara organica tipo "goo reveal"

O `hero` usa uma das assinaturas visuais mais sofisticadas do projeto: uma camada de imagem revelada por blobs SVG com filtro gooey.

#### Como foi feito

- O HTML define `filter`, `mask` e um grupo SVG para blobs.
- O filtro usa:
  - `feGaussianBlur`;
  - `feColorMatrix`;
  - `feComposite`.
- O JavaScript cria dinamicamente circulos SVG que funcionam como blobs.
- Existem dois grupos:
  - blobs automaticos flutuando na area do hero;
  - blobs ligados ao cursor do usuario.
- Uma camada base e uma camada reveal recebem pequenos deslocamentos de parallax.

#### Resultado

- a imagem superior aparece de forma organica;
- o ponteiro gera uma interacao fluida, como tinta ou materia liquida;
- o hero ganha profundidade sem parecer um simples banner estatico.

#### Valor de design

Esse efeito entrega:

- assinatura autoral;
- leitura de alta sofisticacao;
- relacao imediata entre usuario e tela.

### 3. Card de perfil com glassmorphism e tilt 3D

O card lateral do hero combina vidro fosco, glow discreto e leve inclinacao tridimensional.

#### Como foi feito

- `backdrop-filter: blur(...) saturate(...)`;
- gradiente translúcido no fundo;
- bordas finas com acento neon;
- pseudo-elementos para linha lateral e brilho interno;
- animacao de entrada com `GSAP`;
- `mousemove` para calcular `rotationX`, `rotationY`, `x` e `y`.

#### Resultado

- sensacao de cartao fisico premium;
- profundidade sem exagero;
- feedback visual refinado no hover.

### 4. Header reativo ao scroll

O cabecalho nao fica estatico. Ele muda de comportamento conforme o usuario navega.

#### Como foi usado

- ao rolar, o botao de menu ganha fundo escuro translúcido, blur e borda;
- o logo pode ser ocultado para reduzir ruido visual;
- o estado do header e controlado por classes no `body`, como:
  - `header-scrolled`;
  - `header-hide-logo`.

#### Objetivo

- manter o topo limpo;
- melhorar foco no conteudo;
- transformar a navegacao em um elemento contextual.

### 5. Menu overlay full-screen com animacao cinematografica

O menu principal nao e um dropdown comum. Ele e uma tela inteira de navegacao com comportamento cenografico.

#### Efeitos usados

- painel deslizando de cima para baixo;
- animacao do hamburger para `X`;
- fechamento com retracao animada;
- strokes do icone de fechar desenhados com `stroke-dashoffset`;
- mosaico de imagens com rotacoes diferentes e hover de zoom;
- parallax vertical do mosaico com movimento do mouse.

#### Como foi feito

- `transform: translateY(...)` no overlay;
- `GSAP timeline` para abertura e fechamento;
- `mousemove` no painel para mover a grade de imagens;
- `filter` nas imagens com `grayscale`, `sepia`, `brightness`, `contrast` e `saturate`;
- troca de estados com classes `open` e `closing`.

#### Resultado

- navegacao mais memoravel;
- forte impacto visual;
- coerencia com o resto da identidade premium do site.

### 6. Gradiente animado no titulo "FRONT END"

Na secao `sobre`, o grande titulo usa um brilho correndo pelo texto.

#### Como foi feito

- gradiente multiton aplicado no background do texto;
- `background-clip: text`;
- `-webkit-text-fill-color: transparent`;
- `@keyframes frontEndShine` alterando `background-position`.

#### Funcao

- evitar um bloco tipografico estatico;
- introduzir movimento continuo discreto;
- destacar o titulo sem depender de JS.

### 7. Highlights animados por scroll

Varios textos usam uma faixa de destaque que entra e sai por tras da tipografia.

#### Como foi feito

- elemento `.animate-highlight` absoluto;
- `scaleX(0 -> 1 -> 0)` com `GSAP`;
- mudanca de `transform-origin` da esquerda para a direita.

#### Onde aparece

- subtitulos da secao `sobre`;
- rotulos das metricas;
- pequenos trechos de destaque.

#### Efeito percebido

Funciona como um "marca-texto vivo", muito util para reforcar leitura editorial.

### 8. Contadores animados

Os numeros de projetos, experiencia e satisfacao nao aparecem prontos. Eles contam progressivamente.

#### Como foi feito

- elementos com atributos `data-count`;
- tween de um objeto numerico com `GSAP`;
- atualizacao do texto em `onUpdate`;
- disparo quando o bloco entra no viewport com `ScrollTrigger`.

#### Beneficio

- aumenta a percepcao de dinamismo;
- chama atencao para prova social;
- ajuda a segmentar a secao visualmente.

### 9. Parallax em camadas

Algumas secoes usam movimento diferencial entre blocos para gerar profundidade.

#### Aplicacoes

- no `hero`, camada base e camada reveal se movem com intensidades diferentes;
- em `sobre`, o display grande e o corpo do texto se deslocam em velocidades distintas;
- no menu, o mosaico acompanha o mouse.

#### Resultado

- menos sensacao de layout plano;
- maior sofisticacao visual;
- leitura de camadas de interface.

### 10. Panel Stack / secoes empilhadas com sticky

Em telas maiores, as primeiras secoes passam a se comportar como paineis empilhados no scroll.

#### Como foi feito

- ativacao via classe `panel-stack-active`;
- `position: sticky` nas primeiras secoes;
- controle de `z-index` para empilhamento progressivo;
- integracao com `ScrollTrigger`.

#### Funcao

- criar leitura de narrativa por blocos;
- reduzir transicoes abruptas entre secoes;
- dar sensacao de pagina autoral, nao de template comum.

### 11. Secao Stack com barras pulsantes de fundo

A secao de stack usa barras verticais luminosas ao fundo, lembrando equalizador ou visual de energia.

#### Como foi feito

- barras sao criadas via JavaScript;
- cada barra recebe escala inicial diferente;
- animacao `stackPulseBar` altera `scaleY`;
- delays progressivos criam ritmo entre as colunas.

#### Objetivo

- energizar o pano de fundo;
- reforcar o tema de tecnologia;
- sustentar o marquee visualmente.

### 12. Marquee infinito de tecnologias

As stacks sao exibidas em uma faixa horizontal com movimento continuo.

#### Como foi feito

- os chips sao montados via JavaScript;
- o track recebe elementos repetidos para criar loop continuo;
- a posicao `x` e atualizada em ticker do `GSAP`;
- a direcao pode responder ao sentido do scroll;
- o hover aumenta velocidade e adiciona inclinacao 3D no container;
- icones sao puxados da `Simple Icons CDN`.

#### Efeitos combinados

- marquee infinito;
- tilt por mouse;
- brilho dinamico lateral;
- microelevacao nos chips;
- faixa de shine correndo no hover de cada chip.

#### Resultado

Essa secao comunica repertorio tecnico de forma muito mais viva do que uma lista estatica.

### 13. Cards de projeto em formato showcase

Os projetos sao montados dinamicamente e apresentados como cards visuais com tratamento de galeria.

#### Como foi feito

- os dados ficam em `PROJECTS` no `script.js`;
- os cards sao criados com JavaScript;
- a grade usa `CSS Grid` com variacao de spans para ritmo editorial;
- imagens recebem overlay escuro e faixa luminosa diagonal;
- no hover ha zoom da imagem e realce da borda;
- caption usa efeito de painel com blur leve.

#### Efeitos presentes

- hover com `scale`;
- ajuste de `filter`;
- glow de borda;
- glass caption;
- entrada em lote com `ScrollTrigger.batch`.

#### Beneficio visual

- aparencia de portfolio curado;
- leitura mais premium que uma simples lista;
- destaque melhor para imagem, tags e CTA.

### 14. Modal de video

Projetos em video sao exibidos em modal centralizado.

#### Como foi feito

- backdrop escurecido com blur;
- dialog com borda neon e fundo escuro graduado;
- travamento do scroll do `body`;
- fechamento por botao, backdrop e tecla `Escape`.

#### Objetivo

- manter contexto da pagina;
- permitir demonstracao rica sem redirecionar o usuario.

### 15. Secao Trajetoria com tratamento editorial e vidro fosco

A secao `trajetoria` usa fundo claro, textura, contorno e um card central translúcido.

#### Efeitos usados

- imagem de fundo cobrindo toda a area;
- wash de luz por cima da imagem;
- contorno com texturas SVG repetidas;
- card central com `backdrop-filter`;
- borda falsa criada por pseudo-elemento com mascara;
- brilho superior radial.

#### Resultado

- quebra controlada da paleta escura;
- cria momento de respiro visual;
- gera contraste narrativo forte no meio do site.

### 16. Footer/Contato com composicao inspirada em campanha

A area final funciona como uma peca visual de encerramento.

#### Recursos visuais aplicados

- grande headline central;
- imagem principal destacada;
- mascaras SVG na moldura;
- pattern de fundo;
- links laterais com hover de "flip vertical";
- marquee inferior;
- bloco adicional com tilt 3D e glare dinamico.

#### Como os links animam

- texto duplicado em duas camadas;
- o hover move o texto original para cima;
- a versao accent entra de baixo para cima;
- uma faixa de fundo lime cruza o link.

#### Efeito final

Entrega um encerramento forte, com cara de produto premium e nao apenas um rodape funcional.

### 17. Tilt card com glare no CTA final

O card `.js-tilt-card` no footer possui inclinacao 3D e reflexo dinâmico.

#### Como foi feito

- leitura da posicao do mouse dentro do card;
- calculo fisico suavizado com `stiffness` e `damping`;
- aplicacao de `rotateX` e `rotateY`;
- glare controlado por variaveis CSS `--glare-x` e `--glare-y`.

#### Funcao

- transformar o bloco final em objeto quase fisico;
- reforcar acabamento premium;
- encerrar a experiencia com interacao de alto valor percebido.

### 18. Responsividade adaptativa

O projeto nao apenas "encolhe". Ele reconfigura componentes.

#### Ajustes relevantes

- menu overlay muda de grid para coluna unica;
- mosaico do menu e ocultado no mobile;
- card do hero muda de posicao e dimensoes;
- grids de projetos e laboratorio reduzem colunas;
- composicoes com `clip-path` sao adaptadas;
- tipografia usa `clamp()` extensivamente.

#### Resultado

- o layout preserva impacto visual em telas grandes;
- continua utilizavel e legivel em tablets e celulares.

### 19. Acessibilidade e resiliencia de movimento

O projeto considera usuarios que preferem menos animacao.

#### Como isso foi tratado

- uso de `prefers-reduced-motion: reduce`;
- desativacao ou simplificacao de animacoes;
- remocao de transicoes muito intensas;
- ocultacao de certos efeitos decorativos;
- `focus-visible` em botoes e links interativos;
- controle de `aria-expanded`, `aria-hidden`, `aria-controls` e `aria-modal`.

#### Impacto

Isso torna a experiencia mais inclusiva sem desmontar o design.

## Estrategia de Motion Design

O motion do projeto segue uma logica clara:

- entradas com `power3.out` e `power4.out` para suavidade premium;
- movimentos curtos e precisos em elementos funcionais;
- scroll como condutor narrativo;
- hover como reforco de profundidade e materialidade;
- loops visuais discretos em areas de destaque;
- combinacao de CSS animation com GSAP para equilibrar performance e controle.

### Tipos de motion presentes

- `intro motion`;
- `scroll reveal`;
- `batch reveal`;
- `scrub animation`;
- `hover motion`;
- `continuous loop`;
- `pointer reactive motion`;
- `3D tilt`;
- `background ambient motion`.

## Estrategia de Performance

Mesmo com forte carga visual, o projeto aplica varias decisoes para segurar percepcao e performance.

### Medidas adotadas

- imagens com `loading="lazy"` em varios pontos;
- `decoding="async"` para imagens;
- `will-change` em elementos animados estrategicos;
- canvas com `powerPreference: "high-performance"`;
- `devicePixelRatio` limitado a `2`;
- desligamento visual do fundo 3D na secao de projetos;
- uso de `requestAnimationFrame` e `gsap.ticker` em animacoes continuas;
- condicional para reduzir efeitos quando `prefers-reduced-motion` esta ativo.

## Dados e Conteudo Dinamico

Parte do conteudo nao esta fixa no HTML.

### Estruturas geradas por JavaScript

- cards de projetos;
- chips da secao de stack;
- barras de gradiente da stack;
- cards do laboratorio visual;
- blobs SVG do hero.

### Beneficios dessa abordagem

- manutencao mais simples;
- escalabilidade;
- facilidade para adicionar ou remover projetos;
- reaproveitamento de componentes visuais.

## Resumo Tecnico por Secao

### Hero

- imagem de base;
- imagem de reveal mascarada;
- blobs SVG com efeito gooey;
- card translúcido com tilt;
- marca verbal fixa.

### Sobre

- tipografia gigante com gradiente animado;
- counters;
- highlights por scroll;
- parallax em camadas.

### Stack

- barras pulsantes;
- marquee infinito;
- chips com icones e hover premium;
- pin em telas menores.

### Trajetoria

- imagem editorial de fundo;
- wash e contour overlays;
- card central em vidro fosco.

### Projetos

- grid dinamico;
- cards com zoom e filtros;
- modal de video;
- entradas em lote com scroll.

### Contato

- composicao de encerramento;
- links com animacao vertical;
- marquee;
- tilt card com glare.

## Como Executar

Como o projeto e estatico, basta abrir o `index.html` em um navegador moderno. Para melhor compatibilidade com fontes, videos e assets, o ideal e servir localmente.

### Opcao simples com VS Code / Cursor

Use uma extensao de servidor local, como Live Server.

### Opcao com Python

```bash
python -m http.server 8000
```

Depois abra:

[`http://localhost:8000`](http://localhost:8000)

## Compatibilidade Recomendada

- `Google Chrome`
- `Microsoft Edge`
- `Firefox`

Como o projeto usa `backdrop-filter`, mascaras, canvas 3D e animacoes com scroll, navegadores modernos entregam a melhor experiencia.

## Diferenciais do Projeto

- forte direcao de arte visual;
- alta quantidade de efeitos autorais combinados;
- uso consistente de motion como narrativa;
- equilibrio entre showcase visual e navegacao funcional;
- preocupacao com responsividade e `reduced motion`;
- montagem dinamica de conteudo sem framework.

## Conclusao

Este portfolio foi desenvolvido como uma peca de apresentacao visual e tecnica. A stack e enxuta, mas o resultado e sofisticado porque explora profundamente:

- composicao visual;
- tipografia;
- animacao;
- comportamento por scroll;
- interacao por ponteiro;
- camadas de profundidade;
- acabamento de interface.

Em termos de implementacao, o projeto demonstra dominio de `HTML`, `CSS`, `JavaScript`, `GSAP`, `ScrollTrigger`, `Three.js`, mascaras SVG, glassmorphism, layouts responsivos e construcoes visuais de alto impacto sem depender de frameworks pesados.
