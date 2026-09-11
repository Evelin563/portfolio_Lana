export const projects = [
  {
    module: 2,
    title: "Primeiros passos com HTML5",
    category: "Fundamentos",
    description:
      "Página inicial construída com HTML semântico, listas e um formulário de contato.",
    details:
      "Organizei o conteúdo com cabeçalho, seções, área principal e rodapé. O formulário demonstra campos de nome, e-mail e mensagem.",
    learning:
      "Estrutura de documentos, hierarquia de títulos e elementos de formulário.",
    tech: ["HTML5"],
    note: "O formulário é um exercício de interface e não envia mensagens.",
    demo: "./demos/2/index.html",
    source: "./sources/modulo-2.zip",
    image: "./images/project-2.jpg",
    folder: "Módulo 02 - HTML5",
  },
  {
    module: 3,
    title: "Meu primeiro portfólio",
    category: "Fundamentos",
    description:
      "Apresentação pessoal com seções de habilidades, projetos e contato, desenvolvida com HTML e CSS.",
    details:
      "Separei a estrutura da página de sua apresentação visual e usei âncoras para navegar pelas seções.",
    learning:
      "Estilização com CSS externo, organização de conteúdo e identidade visual.",
    tech: ["HTML5", "CSS3"],
    note: "O formulário original não possui serviço de envio.",
    demo: "./demos/3/index.html",
    source: "./sources/modulo-3.zip",
    image: "./images/project-3.jpg",
    folder: "Módulo 03 - Portfólio",
  },
  {
    module: 4,
    title: "Calculadora de IMC",
    category: "JavaScript",
    description:
      "Calculadora que recebe peso e altura e apresenta o índice de massa corporal e sua classificação.",
    details:
      "Implementei o cálculo, a exibição com duas casas decimais e mensagens para entradas inválidas.",
    learning:
      "Operadores, condicionais, conversão de valores e atualização do DOM.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    note: "Exercício de programação; a classificação exibida não substitui avaliação de saúde.",
    demo: "./demos/4/index.html",
    source: "./sources/modulo-4.zip",
    image: "./images/project-4.jpg",
    folder: "Módulo 04 - Calculadora IMC",
    repo: "https://github.com/Evelin563/IMC---version1",
  },
  {
    module: 6,
    title: "Jogo de adivinhação",
    category: "JavaScript",
    description:
      "Jogo em que o participante tenta descobrir um número de 1 a 100 em até dez tentativas.",
    details:
      "Adicionei dicas de maior ou menor, contagem de tentativas, validação do palpite e encerramento por vitória ou derrota.",
    learning: "Números aleatórios, eventos, condicionais e controle de estado.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    demo: "./demos/6/index.html",
    source: "./sources/modulo-6.zip",
    image: "./images/project-6.jpg",
    folder: "Módulo 06 - Jogo de advinha",
    repo: "https://github.com/Evelin563/Jogo-de-advinha",
  },
  {
    module: 7,
    title: "Parquímetro digital",
    category: "JavaScript",
    description:
      "Simulador que converte um valor pago em tempo de estacionamento e calcula o troco.",
    details:
      "Modelei a regra de negócio em uma classe: R$ 1,00 para 30 minutos, R$ 1,75 para 60 e R$ 3,00 para 120.",
    learning:
      "Classes, encapsulamento das regras de cálculo e apresentação de resultados.",
    tech: ["JavaScript", "Classes", "CSS3"],
    demo: "./demos/7/index.html",
    source: "./sources/modulo-7.zip",
    image: "./images/project-7.jpg",
    folder: "Módulo 07 - Estacionamento Parquímetro",
    repo: "https://github.com/Evelin563/contador-de-tempo-estacionamento",
  },
  {
    module: 8,
    title: "Cadastro com busca de CEP",
    category: "APIs",
    description:
      "Formulário que consulta o ViaCEP e preenche automaticamente os campos de endereço.",
    details:
      "Implementei máscara de CEP, busca assíncrona, mensagens de erro e recuperação dos dados salvos no navegador.",
    learning: "Fetch, async/await, integração com API e localStorage.",
    tech: ["JavaScript", "ViaCEP", "localStorage"],
    note: "A consulta de CEP depende de conexão e da disponibilidade do ViaCEP.",
    demo: "./demos/8/index.html",
    source: "./sources/modulo-8.zip",
    image: "./images/project-8.jpg",
    folder: "Módulo 08 - Cadastro de usuários com CEP",
    repo: "https://github.com/Evelin563/cadastro-de-usu-rio-com-CEP",
  },
  {
    module: 9,
    title: "Cadastro de clientes",
    category: "APIs",
    description:
      "Aplicação para cadastrar, listar e excluir clientes, integrada à API CrudCrud.",
    details:
      "Organizei classes e funções utilitárias em módulos; validei nome e e-mail e verifiquei duplicidades antes do cadastro.",
    learning:
      "Módulos JavaScript, requisições HTTP, validação e tratamento de erros.",
    tech: ["JavaScript", "API REST", "CrudCrud"],
    note: "O endpoint de estudo do CrudCrud precisa estar ativo. A demonstração pode apresentar erro de API após sua expiração.",
    demo: "./demos/9/index.html",
    source: "./sources/modulo-9.zip",
    image: "./images/project-9.jpg",
    folder: "Módulo 09 - Cadastro de clientes",
    repo: "https://github.com/Evelin563/API-do-CrudCrud",
  },
  {
    module: 11,
    title: "Agência Criativa Web",
    category: "Interfaces",
    description:
      "Site de agência com apresentação visual de serviços e navegação adaptada para dispositivos móveis.",
    details:
      "Separei os estilos Sass em arquivos de variáveis, mixins, base, componentes e layout. O menu móvel abre e fecha com JavaScript.",
    learning: "Sass modular, responsividade e interação de navegação.",
    tech: ["HTML5", "Sass", "JavaScript"],
    demo: "./demos/11/index.html",
    source: "./sources/modulo-11.zip",
    image: "./images/project-11.jpg",
    folder: "Módulo 11 - Agência Criativa Web",
    repo: "https://github.com/Evelin563/API-responsivo",
  },
  {
    module: 14,
    title: "Estilo Livre · Barbearia",
    category: "Interfaces",
    description:
      "Página de barbearia com apresentação, serviços, depoimentos e contato.",
    details:
      "Combinei a grade e o menu responsivo do Bootstrap com estilos próprios e imagens do negócio fictício.",
    learning:
      "Bootstrap, componentes de interface e composição de páginas responsivas.",
    tech: ["HTML5", "Bootstrap", "CSS3"],
    demo: "./demos/14/index.html",
    source: "./sources/modulo-14.zip",
    image: "./images/project-14.jpg",
    folder: "Módulo 14 - Barbearia",
    repo: "https://github.com/Evelin563/Barbearia",
  },
  {
    module: 15,
    title: "Pet&Style",
    category: "Performance",
    description:
      "Vitrine de produtos para pets, otimizada para reduzir recursos e melhorar a estabilidade visual.",
    details:
      "Substituí as imagens por WebP, usei carregamento sob demanda e dimensões explícitas. O CSS local minificado substituiu o Tailwind via CDN.",
    learning:
      "Otimização de imagens, lazy loading e redução de deslocamentos de layout.",
    tech: ["HTML5", "CSS3", "WebP"],
    note: "O README registra redução de 395,1 KB para 122,1 KB no conjunto de imagens; relatórios disponíveis no projeto.",
    demo: "./demos/15/index.html",
    source: "./sources/modulo-15.zip",
    image: "./images/project-15.jpg",
    folder: "Módulo 15 - PET&Style",
    repo: "https://github.com/Evelin563/petstyle-loja-virtual",
  },
  {
    module: 16,
    title: "Catálogo de produtos",
    category: "React",
    description:
      "Vitrine em React com produtos iniciais e formulário para adicionar novos itens durante a sessão.",
    details:
      "Criei cards reutilizáveis e um formulário controlado. O carregamento inicial é simulado com temporizador, usando dados locais.",
    learning: "Props, useState, useEffect e renderização de listas.",
    tech: ["React", "Vite", "JavaScript"],
    note: "Os produtos adicionados ficam no estado da sessão e não são persistidos em uma API.",
    source: "./sources/modulo-16.zip",
    image: "./images/project-16.jpg",
    folder: "Módulo 16 - Catálogo produtos",
    repo: "https://github.com/Evelin563/catalogo-produtos-react01",
  },
  {
    module: 17,
    title: "To-do List · React",
    category: "React",
    description:
      "Lista de tarefas com criação, conclusão, exclusão e filtros por situação.",
    details:
      "Compartilhei o estado com Context API e criei um hook useLocalStorage para preservar as tarefas entre visitas.",
    learning: "Hooks, Context API, persistência local, useMemo e React.memo.",
    tech: ["React", "Context API", "Hooks"],
    source: "./sources/modulo-17.zip",
    image: "./images/project-17.jpg",
    folder: "módulo 17 - TO-DO List",
    repo: "https://github.com/Evelin563/todo-list-react",
  },
  {
    module: 21,
    title: "Entrelinhas · Livros",
    category: "React",
    description:
      "Catálogo para cadastrar livros e acompanhar o status de leitura com uma API real.",
    details:
      "Implementei listagem, cadastro, remoção e atualização do status, com componentes, serviço HTTP e tipos separados.",
    learning: "TypeScript, Axios, CRUD e estados de carregamento e erro.",
    tech: ["React", "TypeScript", "Axios"],
    note: "É necessário configurar um endpoint CrudCrud ativo conforme o README original.",
    source: "./sources/modulo-21.zip",
    image: "./images/project-21.jpg",
    folder: "Módulo 21 - Catálogo de livros",
    repo: "https://github.com/Evelin563/catalogo-de-livros-react-typescript",
  },
  {
    module: 22,
    title: "Destino sem Fim",
    category: "Next.js",
    description:
      "Catálogo de viagens com páginas individuais para Grécia, Seoul, Egito e Filipinas.",
    details:
      "Usei App Router, cards reutilizáveis, rotas por identificador, metadados próprios e tratamento de páginas inexistentes.",
    learning: "Next.js, rotas dinâmicas, geração estática e CSS Modules.",
    tech: ["Next.js", "TypeScript", "CSS Modules"],
    note: "Portal educacional; não realiza reservas. As fotografias originais possuem créditos no código-fonte.",
    source: "./sources/modulo-22.zip",
    image: "./images/project-22.jpg",
    folder: "Módulo 22 - Catálogo de Viagens",
  },
  {
    module: 23,
    title: "Entrelinhas · Blog",
    category: "Next.js",
    description:
      "Blog com quatro artigos, páginas individuais e metadados específicos para cada publicação.",
    details:
      "Organizei os artigos em JSON e centralizei o acesso assíncrono; gerei páginas no build, sitemap, robots e dados estruturados.",
    learning: "Server Components, slugs, generateStaticParams e metadados.",
    tech: ["Next.js", "React", "TypeScript"],
    note: "O conteúdo é local e alterações nos artigos exigem novo build.",
    repo: "https://github.com/Evelin563/Blog-Dinamico",
    demo: "https://modulo-23-blog-dinamico.vercel.app",
    source: "./sources/modulo-23.zip",
    image: "./images/project-23.jpg",
    folder: "Módulo 23 - Blog dinâmico",
  },
  {
    module: 24,
    title: "Bloom List · Testes",
    category: "Qualidade",
    description:
      "Lista de tarefas em Next.js com formulário controlado, contador e testes automatizados.",
    details:
      "Separei a página de servidor do formulário cliente e testei o formulário, o hook de contagem e a renderização das tarefas.",
    learning:
      "Jest, Testing Library, renderHook e divisão entre componentes de servidor e cliente.",
    tech: ["Next.js", "Jest", "Testing Library"],
    source: "./sources/modulo-24.zip",
    image: "./images/project-24.jpg",
    folder: "Módulo 24 - Testes Next.js",
  },
  {
    module: 26,
    title: "Bloom List · Continuidade",
    category: "Qualidade",
    description:
      "Continuação da aplicação Bloom List, preservando o formulário, a contagem e os testes de tarefas.",
    details:
      "A pasta entregue mantém a mesma base funcional do módulo 24, com testes do formulário, do hook e da página.",
    learning:
      "Reutilização da base de testes e organização de componentes em Next.js.",
    tech: ["Next.js", "TypeScript", "Jest"],
    note: "Este módulo reutiliza a base do módulo 24; os arquivos não evidenciam uma funcionalidade adicional exclusiva.",
    repo: "https://github.com/Evelin563/Listagem-next.js",
    source: "./sources/modulo-26.zip",
    image: "./images/project-26.jpg",
    folder: "Módulo 26 - Testes Next.js",
  },
  {
    module: 30,
    title: "Tarefas · CI/CD",
    category: "Qualidade",
    description:
      "Evolução da lista de tarefas com fluxo automatizado de verificação e publicação no GitHub Pages.",
    details:
      "O workflow instala as dependências, executa lint, testes e build. Pushes na branch main publicam o resultado estático.",
    learning:
      "GitHub Actions, integração contínua, testes e deploy automatizado.",
    tech: ["Next.js", "GitHub Actions", "Jest"],
    repo: "https://github.com/Evelin563/Listagem-CI-CD",
    source: "./sources/modulo-30.zip",
    image: "./images/project-30.jpg",
    folder: "Módulo 30 - CI CD",
  },
  {
    module: 31,
    title: "Diário de Bordo",
    category: "PWA",
    description:
      "Diário para registrar aprendizados com título, descrição e data, mantendo os dados no dispositivo.",
    details:
      "Implementei criação e remoção de registros, ordenação por data, manifesto e service worker para a experiência PWA.",
    learning:
      "localStorage, cache, instalação de aplicações web e funcionamento offline.",
    tech: ["JavaScript", "PWA", "Service Worker"],
    note: "Os registros ficam somente no navegador e não são sincronizados entre dispositivos.",
    repo: "https://github.com/Evelin563/Modulo-31-Diario-de-Bordo",
    demo: "./demos/31/index.html",
    source: "./sources/modulo-31.zip",
    image: "./images/project-31.jpg",
    folder: "Módulo 31 - Diário de Bordo",
  },
  {
    module: 33,
    title: "Cardápio · Micro frontends",
    category: "Arquitetura",
    description:
      "Experiência de cardápio e pedido dividida em três aplicações React independentes.",
    details:
      "O container carrega o cardápio e o pedido com Module Federation. Eventos globais comunicam adição de pratos e atualização do contador.",
    learning:
      "Webpack 5, React.lazy, Suspense e comunicação entre micro frontends.",
    tech: ["React", "Webpack 5", "Module Federation"],
    note: "Para executar o original, inicie o container e os dois micros nas portas 3000, 3001 e 3002.",
    repo: "https://github.com/Evelin563/Modulo-33-Cardapio",
    source: "./sources/modulo-33.zip",
    image: "./images/project-33.jpg",
    folder: "Módulo 33 - Cardápio",
  },
];
