# Lana Oliveira — Portfólio

Portfólio profissional desenvolvido com **React**, **Vite** e **CSS Modules**. A página apresenta minha trajetória, experiência, habilidades, formação, certificados e uma seleção de projetos da formação Full Stack Java.

**Versão online:** [evelin563.github.io/portfolio_Lana](https://evelin563.github.io/portfolio_Lana/)

**Repositório:** [github.com/Evelin563/portfolio_Lana](https://github.com/Evelin563/portfolio_Lana)

## Rodar localmente

Pré-requisitos: Node.js 22.12 ou superior e npm.

```bash
git clone https://github.com/Evelin563/portfolio_Lana.git
cd portfolio_Lana
npm ci
npm run dev
```

Abra o endereço exibido no terminal. Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

No Windows, também é possível abrir a prévia com dois cliques em **Abrir portfolio.cmd**. O navegador será aberto em `http://127.0.0.1:5173/`; mantenha a janela do servidor aberta durante o uso.

## Recursos

- Apresentação profissional com mascote animada e navegação por seções.
- Seções Sobre Mim, Experiência Profissional, Habilidades, Projetos, Formação, Certificados e Contato.
- Três projetos em destaque com imagens, descrições, tecnologias e detalhes acessíveis.
- Link para conhecer outros projetos no perfil do GitHub.
- Contato direto por WhatsApp, e-mail e LinkedIn.
- Layout responsivo para celulares, tablets e computadores.
- Navegação por teclado, foco visível, diálogo acessível e suporte à preferência por movimento reduzido.

## Identidade visual

O design utiliza **Night Rider (`#020101`)** como fundo principal, acompanhado por Aubergine (`#3D0B0D`), Mahogany (`#53080E`), Dark Burgundy (`#72090F`), Pohutukawa (`#930510`) e Roof Terracotta (`#B21F29`). Os tons claros de apoio preservam o contraste e a leitura.

As cores ficam centralizadas em `src/global.css`; a composição, os cartões, os estados interativos e a responsividade ficam em `src/App.module.css`.

## Projetos em destaque

| Projeto | Descrição | Tecnologias |
| --- | --- | --- |
| [Agência Criativa Web](https://github.com/Evelin563/API-responsivo) | Site de agência com apresentação visual de serviços e navegação adaptada para dispositivos móveis. | HTML5, Sass, JavaScript |
| [Estilo Livre · Barbearia](https://github.com/Evelin563/Barbearia) | Página de barbearia com apresentação, serviços, depoimentos e contato. | HTML5, Bootstrap, CSS3 |
| [Pet&Style](https://github.com/Evelin563/petstyle-loja-virtual) | Vitrine de produtos para pets, otimizada para reduzir recursos e melhorar a estabilidade visual. | HTML5, CSS3, WebP |

Os demais trabalhos podem ser acessados em [github.com/Evelin563](https://github.com/Evelin563).

## Organização

```text
src/
  components/     # Seção, cartão de projeto e diálogo reutilizáveis
  data/           # Conteúdo dos projetos
  App.jsx         # Composição das seções
  App.module.css  # Estilos modulares e responsividade
  global.css      # Cores, reset e estilos globais
  main.jsx        # Entrada da aplicação React
public/
  images/         # Mascotes e capturas dos projetos
  demos/          # Demonstrações estáticas
  sources/        # Códigos dos projetos em arquivos ZIP
.github/workflows/deploy.yml
```

## Deploy

O portfólio é publicado gratuitamente no **GitHub Pages**. O workflow `.github/workflows/deploy.yml` instala as dependências, compila a aplicação e publica a pasta `dist` após cada envio para a branch `main`.

Para publicar alterações:

```bash
git add .
git commit -m "Descreva a alteração"
git push origin main
```

O GitHub Actions executará a publicação automaticamente. O projeto não exige variáveis de ambiente.
