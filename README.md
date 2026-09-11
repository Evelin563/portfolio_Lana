# Lana Oliveira — Portfólio

Portfólio profissional em **React**, **Vite** e **CSS Modules**, com os trabalhos da formação Full Stack Java. As descrições foram conferidas no código e nos READMEs fornecidos.

**Status:** entrega local pronta. A publicação será realizada pela autora.

**Endereço previsto após o deploy (ainda não publicado):** https://evelin563.github.io/portfolio-lana-oliveira/

**Repositório criado, ainda sem envio do código:** https://github.com/Evelin563/portfolio-lana-oliveira

## Rodar localmente

Pré-requisito: Node.js 22.12 ou superior (ou Node.js 24) e npm.

```bash
cd portfolio
npm ci
npm run dev
```

Execute os comandos acima a partir da pasta de projetos, onde está a pasta `portfolio` desta entrega. Depois que o código for enviado ao GitHub, também será possível clonar o repositório. Abra o endereço informado no terminal. Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Funcionalidades

- Seção com oito certificados em desenvolvimento, programação, tecnologia e produtividade.
- Exibição apenas dos dados profissionais dos certificados; documentos originais e códigos de validação permanecem privados.

### Abrir a prévia no Windows

Dê dois cliques em **Abrir portfolio.cmd**, dentro da pasta do projeto. O navegador abrirá em **http://127.0.0.1:5173/**. Mantenha a janela do servidor aberta durante o uso. Este endereço é local: ele funciona somente neste computador enquanto o servidor estiver em execução. Se a conexão for recusada, execute o arquivo novamente. Não abra o index.html diretamente; o React precisa do servidor de desenvolvimento ou de uma versão compilada servida por HTTP.

### Identidade visual

Paleta: Honeydew (`#EDF8E5`), Tea Green (`#E8FFBE`), Blush Pop (`#FFB8E3`), Cotton Candy (`#FF819C`) e Blushed Brick (`#CE4A4A`). As cores ficam centralizadas em `src/global.css`, com tons escuros de apoio para manter o texto legível.

### Recursos

- Apresentação profissional, foto de perfil do GitHub e seções Sobre Mim, Projetos, Habilidades e Contato.
- Navegação por âncoras e layout adaptado a celulares e computadores.
- Galeria com **19 projetos disponíveis**, descrições objetivas, tecnologias e capturas reais das interfaces.
- Detalhes em diálogo acessível com fechamento por Escape, contenção de foco nativa e retorno ao botão de origem.
- Links para os repositórios identificados nos projetos e download do código-fonte de cada projeto.
- Demonstrações locais dos projetos HTML/CSS/JavaScript e link da versão publicada do blog.
- Contato por e-mail (abre o aplicativo de e-mail) e perfil do GitHub. Não existe envio simulado de formulário.
- Respeito à preferência por movimento reduzido e link para pular ao conteúdo.

## Projetos apresentados

| Projeto | Descrição | Tecnologias |
| --- | --- | --- |
| Primeiros passos com HTML5 | Página inicial construída com HTML semântico, listas e um formulário de contato. | HTML5 |
| Meu primeiro portfólio | Apresentação pessoal com seções de habilidades, projetos e contato, desenvolvida com HTML e CSS. | HTML5, CSS3 |
| [Calculadora de IMC](https://github.com/Evelin563/IMC---version1) | Calculadora que recebe peso e altura e apresenta o índice de massa corporal e sua classificação. | HTML5, CSS3, JavaScript |
| [Jogo de adivinhação](https://github.com/Evelin563/Jogo-de-advinha) | Jogo em que o participante tenta descobrir um número de 1 a 100 em até dez tentativas. | HTML5, CSS3, JavaScript |
| [Parquímetro digital](https://github.com/Evelin563/contador-de-tempo-estacionamento) | Simulador que converte um valor pago em tempo de estacionamento e calcula o troco. | JavaScript, Classes, CSS3 |
| [Cadastro com busca de CEP](https://github.com/Evelin563/cadastro-de-usu-rio-com-CEP) | Formulário que consulta o ViaCEP e preenche automaticamente os campos de endereço. | JavaScript, ViaCEP, localStorage |
| [Cadastro de clientes](https://github.com/Evelin563/API-do-CrudCrud) | Aplicação para cadastrar, listar e excluir clientes, integrada à API CrudCrud. | JavaScript, API REST, CrudCrud |
| [Agência Criativa Web](https://github.com/Evelin563/API-responsivo) | Site de agência com apresentação visual de serviços e navegação adaptada para dispositivos móveis. | HTML5, Sass, JavaScript |
| [Estilo Livre · Barbearia](https://github.com/Evelin563/Barbearia) | Página de barbearia com apresentação, serviços, depoimentos e contato. | HTML5, Bootstrap, CSS3 |
| [Pet&Style](https://github.com/Evelin563/petstyle-loja-virtual) | Vitrine de produtos para pets, otimizada para reduzir recursos e melhorar a estabilidade visual. | HTML5, CSS3, WebP |
| [Catálogo de produtos](https://github.com/Evelin563/catalogo-produtos-react01) | Vitrine em React com produtos iniciais e formulário para adicionar novos itens durante a sessão. | React, Vite, JavaScript |
| [To-do List · React](https://github.com/Evelin563/todo-list-react) | Lista de tarefas com criação, conclusão, exclusão e filtros por situação. | React, Context API, Hooks |
| [Entrelinhas · Livros](https://github.com/Evelin563/catalogo-de-livros-react-typescript) | Catálogo para cadastrar livros e acompanhar o status de leitura com uma API real. | React, TypeScript, Axios |
| Destino sem Fim | Catálogo de viagens com páginas individuais para Grécia, Seoul, Egito e Filipinas. | Next.js, TypeScript, CSS Modules |
| [Entrelinhas · Blog](https://github.com/Evelin563/Blog-Dinamico) | Blog com quatro artigos, páginas individuais e metadados específicos para cada publicação. | Next.js, React, TypeScript |
| [Bloom List · Lista de tarefas com testes](https://github.com/Evelin563/Listagem-next.js) | Lista de tarefas em Next.js com formulário controlado, contador e testes automatizados. | Next.js, TypeScript, Jest |
| [Tarefas · CI/CD](https://github.com/Evelin563/Listagem-CI-CD) | Evolução da lista de tarefas com fluxo automatizado de verificação e publicação no GitHub Pages. | Next.js, GitHub Actions, Jest |
| [Diário de Bordo](https://github.com/Evelin563/Modulo-31-Diario-de-Bordo) | Diário para registrar aprendizados com título, descrição e data, mantendo os dados no dispositivo. | JavaScript, PWA, Service Worker |
| [Cardápio · Micro frontends](https://github.com/Evelin563/Modulo-33-Cardapio) | Experiência de cardápio e pedido dividida em três aplicações React independentes. | React, Webpack 5, Module Federation |

### Sobre a integridade da entrega

- A apresentação profissional utiliza o nome e a formação do portfólio original. Foto e contato vêm do perfil GitHub conectado. Experiência profissional não fornecida não foi inventada.
- As fontes baixáveis excluem dependências, histórico Git, configurações de ambiente e saídas de build. URLs privadas de estudo do CrudCrud foram substituídas por um marcador de configuração nas cópias. Os arquivos originais foram preservados.
- Os projetos que dependem de CrudCrud precisam de endpoint válido. O catálogo de produtos usa dados locais; os registros do diário e das tarefas são locais ao navegador.
- Algumas demonstrações originais dependem de CDN, APIs ou imagens externas. Os formulários de Primeiros passos com HTML5 e Meu primeiro portfólio são exercícios sem backend. As demonstrações não representam serviços comerciais reais.
- As imagens usadas nos projetos permanecem com os créditos originais nos downloads; as capturas documentam a interface dos trabalhos de estudo.

## Organização

```text
src/
  components/     # Seção, card de projeto e diálogo reutilizáveis
  data/           # Conteúdo dos projetos
  App.jsx         # Composição das seções
  App.module.css  # Estilos modulares e responsividade
  global.css      # Reset, tipografia e acessibilidade global
  main.jsx        # Entrada React
public/
  images/         # Foto e capturas dos projetos
  demos/          # Cópias das demonstrações estáticas
  sources/        # Código dos projetos em ZIP
.github/workflows/deploy.yml
```

## Personalizar

Edite os textos e contatos em `src/App.jsx`; os dados dos projetos estão em `src/data/projects.js`. Para incluir outros trabalhos, acrescente os registros, as capturas e os links e atualize a contagem. Substitua a foto em `public/images/lana.jpg` quando desejar.

Os scripts de preparação e captura em `scripts/` registram o processo da entrega. Não são necessários para executar ou publicar o portfólio: todos os recursos finais estão incluídos. Eles dependem da pasta original dos projetos e de ferramentas temporárias de captura, que não fazem parte das dependências da aplicação.

## Deploy gratuito

O repositório público já foi criado e o GitHub Pages está configurado para GitHub Actions, mas o código não foi enviado e o site não foi publicado. A autora realizará essa etapa. Na pasta local `portfolio`, revise o conteúdo e execute:

```bash
git push -u origin main
```

O remoto `origin` já aponta para o repositório acima. Após concluir o deploy, confirme o endereço e atualize o status no início deste README.

O workflow `.github/workflows/deploy.yml` instala as dependências, compila o site e publica a pasta `dist` no GitHub Pages a cada push para `main`. Em **Settings → Pages**, a origem deve ser **GitHub Actions**. O caminho base relativo permite hospedar o mesmo build em um subdiretório.

Para publicar na Vercel ou Netlify, importe este repositório, use `npm run build` como comando de build e `dist` como diretório de saída. Não são necessárias variáveis de ambiente para o portfólio.

Referências: [deploy estático do Vite](https://vite.dev/guide/static-deploy.html) e [workflows do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
