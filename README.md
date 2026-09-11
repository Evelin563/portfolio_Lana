# Lana Oliveira — Portfólio

Portfólio profissional em **React**, **Vite** e **CSS Modules**, com os trabalhos da formação Full Stack Java. As descrições foram conferidas no código e nos READMEs fornecidos.

**Versão online:** https://evelin563.github.io/portfolio-lana-oliveira/

**Repositório:** https://github.com/Evelin563/portfolio-lana-oliveira

## Rodar localmente

Pré-requisito: Node.js 22.12 ou superior (ou Node.js 24) e npm.

```bash
git clone https://github.com/Evelin563/portfolio-lana-oliveira.git
cd portfolio-lana-oliveira
npm ci
npm run dev
```

Abra o endereço informado no terminal. Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Funcionalidades

- Apresentação profissional, foto de perfil do GitHub e seções Sobre Mim, Projetos, Habilidades e Contato.
- Navegação por âncoras e layout adaptado a celulares e computadores.
- Galeria com **20 projetos disponíveis**, descrições objetivas, tecnologias e capturas reais das interfaces.
- Detalhes em diálogo acessível com fechamento por Escape, contenção de foco nativa e retorno ao botão de origem.
- Links para os repositórios identificados nos projetos e download do código-fonte de cada módulo.
- Demonstrações locais dos projetos HTML/CSS/JavaScript e link da versão publicada do blog.
- Contato por e-mail (abre o aplicativo de e-mail) e perfil do GitHub. Não existe envio simulado de formulário.
- Respeito à preferência por movimento reduzido e link para pular ao conteúdo.

## Projetos apresentados

| Módulo | Projeto                                                                       | Descrição                                                                                          | Tecnologias                         |
| ------ | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 02     | Primeiros passos com HTML5                                                    | Página inicial construída com HTML semântico, listas e um formulário de contato.                   | HTML5                               |
| 03     | Meu primeiro portfólio                                                        | Apresentação pessoal com seções de habilidades, projetos e contato, desenvolvida com HTML e CSS.   | HTML5, CSS3                         |
| 04     | Calculadora de IMC                                                            | Calculadora que recebe peso e altura e apresenta o índice de massa corporal e sua classificação.   | HTML5, CSS3, JavaScript             |
| 06     | Jogo de adivinhação                                                           | Jogo em que o participante tenta descobrir um número de 1 a 100 em até dez tentativas.             | HTML5, CSS3, JavaScript             |
| 07     | Parquímetro digital                                                           | Simulador que converte um valor pago em tempo de estacionamento e calcula o troco.                 | JavaScript, Classes, CSS3           |
| 08     | Cadastro com busca de CEP                                                     | Formulário que consulta o ViaCEP e preenche automaticamente os campos de endereço.                 | JavaScript, ViaCEP, localStorage    |
| 09     | Cadastro de clientes                                                          | Aplicação para cadastrar, listar e excluir clientes, integrada à API CrudCrud.                     | JavaScript, API REST, CrudCrud      |
| 11     | Agência Criativa Web                                                          | Site de agência com apresentação visual de serviços e navegação adaptada para dispositivos móveis. | HTML5, Sass, JavaScript             |
| 14     | Estilo Livre · Barbearia                                                      | Página de barbearia com apresentação, serviços, depoimentos e contato.                             | HTML5, Bootstrap, CSS3              |
| 15     | Pet&Style                                                                     | Vitrine de produtos para pets, otimizada para reduzir recursos e melhorar a estabilidade visual.   | HTML5, CSS3, WebP                   |
| 16     | Catálogo de produtos                                                          | Vitrine em React com produtos iniciais e formulário para adicionar novos itens durante a sessão.   | React, Vite, JavaScript             |
| 17     | To-do List · React                                                            | Lista de tarefas com criação, conclusão, exclusão e filtros por situação.                          | React, Context API, Hooks           |
| 21     | Entrelinhas · Livros                                                          | Catálogo para cadastrar livros e acompanhar o status de leitura com uma API real.                  | React, TypeScript, Axios            |
| 22     | Destino sem Fim                                                               | Catálogo de viagens com páginas individuais para Grécia, Seoul, Egito e Filipinas.                 | Next.js, TypeScript, CSS Modules    |
| 23     | [Entrelinhas · Blog](https://github.com/Evelin563/Blog-Dinamico)              | Blog com quatro artigos, páginas individuais e metadados específicos para cada publicação.         | Next.js, React, TypeScript          |
| 24     | Bloom List · Testes                                                           | Lista de tarefas em Next.js com formulário controlado, contador e testes automatizados.            | Next.js, Jest, Testing Library      |
| 26     | [Bloom List · Continuidade](https://github.com/Evelin563/Listagem-next.js)    | Continuação da aplicação Bloom List, preservando o formulário, a contagem e os testes de tarefas.  | Next.js, TypeScript, Jest           |
| 30     | [Tarefas · CI/CD](https://github.com/Evelin563/Listagem-CI-CD)                | Evolução da lista de tarefas com fluxo automatizado de verificação e publicação no GitHub Pages.   | Next.js, GitHub Actions, Jest       |
| 31     | [Diário de Bordo](https://github.com/Evelin563/Modulo-31-Diario-de-Bordo)     | Diário para registrar aprendizados com título, descrição e data, mantendo os dados no dispositivo. | JavaScript, PWA, Service Worker     |
| 33     | [Cardápio · Micro frontends](https://github.com/Evelin563/Modulo-33-Cardapio) | Experiência de cardápio e pedido dividida em três aplicações React independentes.                  | React, Webpack 5, Module Federation |

### Sobre a integridade da entrega

- A pasta **Módulo 20 - To-do List está vazia**. Ela é identificada como pendente no site, sem funcionalidades ou tecnologias inventadas.
- Os módulos 24 e 26 mantêm a mesma base Bloom List; ambos aparecem com essa relação explicada. O módulo 30 acrescenta o fluxo de CI/CD.
- O arquivo ZIP do módulo 23 é uma versão compactada do mesmo módulo e não é contado como um projeto adicional.
- A apresentação profissional utiliza o nome e a formação do portfólio original. Foto e contato vêm do perfil GitHub conectado. Experiência profissional não fornecida não foi inventada.
- As fontes baixáveis excluem dependências, histórico Git, configurações de ambiente e saídas de build. URLs privadas de estudo do CrudCrud foram substituídas por um marcador de configuração nas cópias. Os arquivos originais foram preservados.
- Os projetos que dependem de CrudCrud precisam de endpoint válido. O catálogo de produtos usa dados locais; os registros do diário e das tarefas são locais ao navegador.
- Algumas demonstrações originais dependem de CDN, APIs ou imagens externas. Os formulários dos módulos 02 e 03 são exercícios sem backend. As demonstrações não representam serviços comerciais reais.
- As imagens usadas nos projetos permanecem com os créditos originais nos downloads; as capturas documentam a interface dos trabalhos de estudo.

## Organização

```text
src/
  components/     # Seção, card de projeto e diálogo reutilizáveis
  data/           # Conteúdo dos 20 projetos
  App.jsx         # Composição das seções
  App.module.css  # Estilos modulares e responsividade
  global.css      # Reset, tipografia e acessibilidade global
  main.jsx        # Entrada React
public/
  images/         # Foto e capturas dos projetos
  demos/          # Cópias das demonstrações estáticas
  sources/        # Código dos módulos em ZIP
.github/workflows/deploy.yml
```

## Personalizar

Edite os textos e contatos em `src/App.jsx`; os dados dos projetos estão em `src/data/projects.js`. Para adicionar o módulo 20 quando seus arquivos forem fornecidos, acrescente seu registro, captura e link de código e atualize a contagem e o aviso de pendência. Substitua a foto em `public/images/lana.jpg` quando desejar.

Os scripts de preparação e captura em `scripts/` registram o processo da entrega. Não são necessários para executar ou publicar o portfólio: todos os recursos finais estão incluídos. Eles dependem da pasta original dos módulos e de ferramentas temporárias de captura, que não fazem parte das dependências da aplicação.

## Deploy gratuito

O workflow `.github/workflows/deploy.yml` instala as dependências, compila o site e publica a pasta `dist` no GitHub Pages a cada push para `main`. Em **Settings → Pages**, a origem deve ser **GitHub Actions**. O caminho base relativo permite hospedar o mesmo build em um subdiretório.

Para publicar na Vercel ou Netlify, importe este repositório, use `npm run build` como comando de build e `dist` como diretório de saída. Não são necessárias variáveis de ambiente para o portfólio.

Referências: [deploy estático do Vite](https://vite.dev/guide/static-deploy.html) e [workflows do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
