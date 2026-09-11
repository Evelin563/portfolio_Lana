import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
const root = path.resolve("..");
// Descrições conferidas no código e nos READMEs dos projetos originais.
const rows = [
  [
    2,
    "Primeiros passos com HTML5",
    "Fundamentos",
    "Página inicial construída com HTML semântico, listas e um formulário de contato.",
    "Organizei o conteúdo com cabeçalho, seções, área principal e rodapé. O formulário demonstra campos de nome, e-mail e mensagem.",
    "Estrutura de documentos, hierarquia de títulos e elementos de formulário.",
    ["HTML5"],
    "O formulário é um exercício de interface e não envia mensagens.",
  ],
  [
    3,
    "Meu primeiro portfólio",
    "Fundamentos",
    "Apresentação pessoal com seções de habilidades, projetos e contato, desenvolvida com HTML e CSS.",
    "Separei a estrutura da página de sua apresentação visual e usei âncoras para navegar pelas seções.",
    "Estilização com CSS externo, organização de conteúdo e identidade visual.",
    ["HTML5", "CSS3"],
    "O formulário original não possui serviço de envio.",
  ],
  [
    4,
    "Calculadora de IMC",
    "JavaScript",
    "Calculadora que recebe peso e altura e apresenta o índice de massa corporal e sua classificação.",
    "Implementei o cálculo, a exibição com duas casas decimais e mensagens para entradas inválidas.",
    "Operadores, condicionais, conversão de valores e atualização do DOM.",
    ["HTML5", "CSS3", "JavaScript"],
    "Exercício de programação; a classificação exibida não substitui avaliação de saúde.",
  ],
  [
    6,
    "Jogo de adivinhação",
    "JavaScript",
    "Jogo em que o participante tenta descobrir um número de 1 a 100 em até dez tentativas.",
    "Adicionei dicas de maior ou menor, contagem de tentativas, validação do palpite e encerramento por vitória ou derrota.",
    "Números aleatórios, eventos, condicionais e controle de estado.",
    ["HTML5", "CSS3", "JavaScript"],
  ],
  [
    7,
    "Parquímetro digital",
    "JavaScript",
    "Simulador que converte um valor pago em tempo de estacionamento e calcula o troco.",
    "Modelei a regra de negócio em uma classe: R$ 1,00 para 30 minutos, R$ 1,75 para 60 e R$ 3,00 para 120.",
    "Classes, encapsulamento das regras de cálculo e apresentação de resultados.",
    ["JavaScript", "Classes", "CSS3"],
  ],
  [
    8,
    "Cadastro com busca de CEP",
    "APIs",
    "Formulário que consulta o ViaCEP e preenche automaticamente os campos de endereço.",
    "Implementei máscara de CEP, busca assíncrona, mensagens de erro e recuperação dos dados salvos no navegador.",
    "Fetch, async/await, integração com API e localStorage.",
    ["JavaScript", "ViaCEP", "localStorage"],
    "A consulta de CEP depende de conexão e da disponibilidade do ViaCEP.",
  ],
  [
    9,
    "Cadastro de clientes",
    "APIs",
    "Aplicação para cadastrar, listar e excluir clientes, integrada à API CrudCrud.",
    "Organizei classes e funções utilitárias em módulos; validei nome e e-mail e verifiquei duplicidades antes do cadastro.",
    "Módulos JavaScript, requisições HTTP, validação e tratamento de erros.",
    ["JavaScript", "API REST", "CrudCrud"],
    "O endpoint de estudo do CrudCrud precisa estar ativo. A demonstração pode apresentar erro de API após sua expiração.",
  ],
  [
    11,
    "Agência Criativa Web",
    "Interfaces",
    "Site de agência com apresentação visual de serviços e navegação adaptada para dispositivos móveis.",
    "Separei os estilos Sass em arquivos de variáveis, mixins, base, componentes e layout. O menu móvel abre e fecha com JavaScript.",
    "Sass modular, responsividade e interação de navegação.",
    ["HTML5", "Sass", "JavaScript"],
  ],
  [
    14,
    "Estilo Livre · Barbearia",
    "Interfaces",
    "Página de barbearia com apresentação, serviços, depoimentos e contato.",
    "Combinei a grade e o menu responsivo do Bootstrap com estilos próprios e imagens do negócio fictício.",
    "Bootstrap, componentes de interface e composição de páginas responsivas.",
    ["HTML5", "Bootstrap", "CSS3"],
  ],
  [
    15,
    "Pet&Style",
    "Performance",
    "Vitrine de produtos para pets, otimizada para reduzir recursos e melhorar a estabilidade visual.",
    "Substituí as imagens por WebP, usei carregamento sob demanda e dimensões explícitas. O CSS local minificado substituiu o Tailwind via CDN.",
    "Otimização de imagens, lazy loading e redução de deslocamentos de layout.",
    ["HTML5", "CSS3", "WebP"],
    "O README registra redução de 395,1 KB para 122,1 KB no conjunto de imagens; relatórios disponíveis no projeto.",
  ],
  [
    16,
    "Catálogo de produtos",
    "React",
    "Vitrine em React com produtos iniciais e formulário para adicionar novos itens durante a sessão.",
    "Criei cards reutilizáveis e um formulário controlado. O carregamento inicial é simulado com temporizador, usando dados locais.",
    "Props, useState, useEffect e renderização de listas.",
    ["React", "Vite", "JavaScript"],
    "Os produtos adicionados ficam no estado da sessão e não são persistidos em uma API.",
  ],
  [
    17,
    "To-do List · React",
    "React",
    "Lista de tarefas com criação, conclusão, exclusão e filtros por situação.",
    "Compartilhei o estado com Context API e criei um hook useLocalStorage para preservar as tarefas entre visitas.",
    "Hooks, Context API, persistência local, useMemo e React.memo.",
    ["React", "Context API", "Hooks"],
  ],
  [
    21,
    "Entrelinhas · Livros",
    "React",
    "Catálogo para cadastrar livros e acompanhar o status de leitura com uma API real.",
    "Implementei listagem, cadastro, remoção e atualização do status, com componentes, serviço HTTP e tipos separados.",
    "TypeScript, Axios, CRUD e estados de carregamento e erro.",
    ["React", "TypeScript", "Axios"],
    "É necessário configurar um endpoint CrudCrud ativo conforme o README original.",
  ],
  [
    22,
    "Destino sem Fim",
    "Next.js",
    "Catálogo de viagens com páginas individuais para Grécia, Seoul, Egito e Filipinas.",
    "Usei App Router, cards reutilizáveis, rotas por identificador, metadados próprios e tratamento de páginas inexistentes.",
    "Next.js, rotas dinâmicas, geração estática e CSS Modules.",
    ["Next.js", "TypeScript", "CSS Modules"],
    "Portal educacional; não realiza reservas. As fotografias originais possuem créditos no código-fonte.",
  ],
  [
    23,
    "Entrelinhas · Blog",
    "Next.js",
    "Blog com quatro artigos, páginas individuais e metadados específicos para cada publicação.",
    "Organizei os artigos em JSON e centralizei o acesso assíncrono; gerei páginas no build, sitemap, robots e dados estruturados.",
    "Server Components, slugs, generateStaticParams e metadados.",
    ["Next.js", "React", "TypeScript"],
    "O conteúdo é local e alterações nos artigos exigem novo build.",
  ],
  [
    26,
    "Bloom List · Lista de tarefas com testes",
    "Qualidade",
    "Lista de tarefas em Next.js com formulário controlado, contador e testes automatizados.",
    "Separei a página de servidor do formulário cliente e testei a criação de tarefas, o hook de contagem e a renderização da página.",
    "Jest, Testing Library, renderHook e organização de componentes em Next.js.",
    ["Next.js", "TypeScript", "Jest"],
  ],
  [
    30,
    "Tarefas · CI/CD",
    "Qualidade",
    "Evolução da lista de tarefas com fluxo automatizado de verificação e publicação no GitHub Pages.",
    "O workflow instala as dependências, executa lint, testes e build. Pushes na branch main publicam o resultado estático.",
    "GitHub Actions, integração contínua, testes e deploy automatizado.",
    ["Next.js", "GitHub Actions", "Jest"],
  ],
  [
    31,
    "Diário de Bordo",
    "PWA",
    "Diário para registrar aprendizados com título, descrição e data, mantendo os dados no dispositivo.",
    "Implementei criação e remoção de registros, ordenação por data, manifesto e service worker para a experiência PWA.",
    "localStorage, cache, instalação de aplicações web e funcionamento offline.",
    ["JavaScript", "PWA", "Service Worker"],
    "Os registros ficam somente no navegador e não são sincronizados entre dispositivos.",
  ],
  [
    33,
    "Cardápio · Micro frontends",
    "Arquitetura",
    "Experiência de cardápio e pedido dividida em três aplicações React independentes.",
    "O container carrega o cardápio e o pedido com Module Federation. Eventos globais comunicam adição de pratos e atualização do contador.",
    "Webpack 5, React.lazy, Suspense e comunicação entre micro frontends.",
    ["React", "Webpack 5", "Module Federation"],
    "Para executar o original, inicie o container e os dois micros nas portas 3000, 3001 e 3002.",
  ],
];
fs.mkdirSync("src/data", { recursive: true });
fs.mkdirSync("public/images", { recursive: true });
fs.mkdirSync("public/sources", { recursive: true });
fs.mkdirSync("public/demos", { recursive: true });
const excluded = new Set([
  "node_modules",
  ".git",
  ".next",
  "dist",
  "out",
  ".vercel",
  "coverage",
  "reports",
]);
function copy(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    if (
      excluded.has(e.name) ||
      e.name.startsWith(".env") ||
      e.name.endsWith(".tsbuildinfo") ||
      e.name === "AGENTS.md"
    )
      continue;
    const a = path.join(src, e.name),
      b = path.join(dst, e.name);
    if (e.isDirectory()) copy(a, b);
    else {
      let data = fs.readFileSync(a);
      if (/\.(js|jsx|ts|tsx|json|html|md)$/.test(e.name)) {
        data = Buffer.from(
          data
            .toString()
            .replace(
              /https:\/\/crudcrud\.com\/api\/[a-f0-9]{20,}/gi,
              "https://crudcrud.com/api/SEU_ENDPOINT_UNICO",
            ),
        );
      }
      fs.writeFileSync(b, data);
    }
  }
}
const projects = rows.map(
  ([module, title, category, description, details, learning, tech, note]) => {
    const folder = fs
      .readdirSync(root)
      .find((f) =>
        new RegExp(`^módulo ${String(module).padStart(2, "0")} `, "i").test(f),
      );
    let src = path.join(root, folder);
    if (module === 22) src = path.join(src, "catalogo-de-viagens");
    let repo;
    try {
      repo = execFileSync("git", ["-C", src, "remote", "get-url", "origin"], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      })
        .trim()
        .replace(/\.git$/, "");
    } catch {}
    const sourceFolder = path.resolve("artifacts/sources", String(module));
    copy(src, sourceFolder);
    let demo;
    if ([2, 3, 4, 6, 7, 8, 9, 11, 14, 15, 31].includes(module)) {
      copy(src, `public/demos/${module}`);
      if (module === 2)
        fs.copyFileSync(
          path.join(src, "prática02.html"),
          `public/demos/${module}/index.html`,
        );
      demo = `./demos/${module}/index.html`;
    }
    if (module === 23) demo = "https://modulo-23-blog-dinamico.vercel.app";
    return {
      module,
      title,
      category,
      description,
      details,
      learning,
      tech,
      note,
      repo,
      demo,
      source: `./sources/modulo-${module}.zip`,
      image: `./images/project-${module}.jpg`,
      folder,
    };
  },
);
fs.writeFileSync(
  "src/data/projects.js",
  "export const projects = " + JSON.stringify(projects, null, 2) + ";\n",
);
fs.writeFileSync(
  "artifacts/project-inventory.json",
  JSON.stringify(projects, null, 2),
);
console.log(
  `${projects.length} projetos documentados; cópias de demonstração e fontes preparadas sem alterar os originais.`,
);
