import fs from "node:fs";
import { projects } from "../src/data/projects.js";
const text = `# Lana Oliveira — Portfólio

Portfólio profissional em **React**, **Vite** e **CSS Modules**, com os trabalhos da formação Full Stack Java. As descrições foram conferidas no código e nos READMEs fornecidos.

**Status:** entrega local pronta. A publicação será realizada pela autora.

**Endereço previsto após o deploy (ainda não publicado):** https://evelin563.github.io/portfolio-lana-oliveira/

**Repositório criado, ainda sem envio do código:** https://github.com/Evelin563/portfolio-lana-oliveira

## Rodar localmente

Pré-requisito: Node.js 22.12 ou superior (ou Node.js 24) e npm.

\`\`\`bash
cd portfolio
npm ci
npm run dev
\`\`\`

Execute os comandos acima a partir da pasta de projetos, onde está a pasta \`portfolio\` desta entrega. Depois que o código for enviado ao GitHub, também será possível clonar o repositório. Abra o endereço informado no terminal. Para gerar e conferir a versão de produção:

\`\`\`bash
npm run build
npm run preview
\`\`\`

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

| Módulo | Projeto | Descrição | Tecnologias |
| --- | --- | --- | --- |
${projects.map((p) => `| ${String(p.module).padStart(2, "0")} | ${p.repo ? `[${p.title}](${p.repo})` : p.title} | ${p.description} | ${p.tech.join(", ")} |`).join("\n")}

### Sobre a integridade da entrega

- O módulo 20 foi excluído da apresentação por orientação da autora, pois sua pasta não contém arquivos.
- Os módulos 24 e 26 mantêm a mesma base Bloom List; ambos aparecem com essa relação explicada. O módulo 30 acrescenta o fluxo de CI/CD.
- O arquivo ZIP do módulo 23 é uma versão compactada do mesmo módulo e não é contado como um projeto adicional.
- A apresentação profissional utiliza o nome e a formação do portfólio original. Foto e contato vêm do perfil GitHub conectado. Experiência profissional não fornecida não foi inventada.
- As fontes baixáveis excluem dependências, histórico Git, configurações de ambiente e saídas de build. URLs privadas de estudo do CrudCrud foram substituídas por um marcador de configuração nas cópias. Os arquivos originais foram preservados.
- Os projetos que dependem de CrudCrud precisam de endpoint válido. O catálogo de produtos usa dados locais; os registros do diário e das tarefas são locais ao navegador.
- Algumas demonstrações originais dependem de CDN, APIs ou imagens externas. Os formulários dos módulos 02 e 03 são exercícios sem backend. As demonstrações não representam serviços comerciais reais.
- As imagens usadas nos projetos permanecem com os créditos originais nos downloads; as capturas documentam a interface dos trabalhos de estudo.

## Organização

\`\`\`text
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
\`\`\`

## Personalizar

Edite os textos e contatos em \`src/App.jsx\`; os dados dos projetos estão em \`src/data/projects.js\`. Para incluir outros trabalhos, acrescente os registros, as capturas e os links e atualize a contagem. Substitua a foto em \`public/images/lana.jpg\` quando desejar.

Os scripts de preparação e captura em \`scripts/\` registram o processo da entrega. Não são necessários para executar ou publicar o portfólio: todos os recursos finais estão incluídos. Eles dependem da pasta original dos módulos e de ferramentas temporárias de captura, que não fazem parte das dependências da aplicação.

## Deploy gratuito

O repositório público já foi criado e o GitHub Pages está configurado para GitHub Actions, mas o código não foi enviado e o site não foi publicado. A autora realizará essa etapa. Na pasta local \`portfolio\`, revise o conteúdo e execute:

\`\`\`bash
git push -u origin main
\`\`\`

O remoto \`origin\` já aponta para o repositório acima. Após concluir o deploy, confirme o endereço e atualize o status no início deste README.

O workflow \`.github/workflows/deploy.yml\` instala as dependências, compila o site e publica a pasta \`dist\` no GitHub Pages a cada push para \`main\`. Em **Settings → Pages**, a origem deve ser **GitHub Actions**. O caminho base relativo permite hospedar o mesmo build em um subdiretório.

Para publicar na Vercel ou Netlify, importe este repositório, use \`npm run build\` como comando de build e \`dist\` como diretório de saída. Não são necessárias variáveis de ambiente para o portfólio.

Referências: [deploy estático do Vite](https://vite.dev/guide/static-deploy.html) e [workflows do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
`;
fs.writeFileSync("README.md", text);
