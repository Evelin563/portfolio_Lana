import { useState } from "react";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ProjectDialog from "./components/ProjectDialog";
import { projects } from "./data/projects";
import styles from "./App.module.css";
const skills = [
  [
    "01",
    "Fundamentos web",
    "HTML5, CSS3, JavaScript e responsividade",
    "Da estrutura semântica à interação com formulários, eventos e armazenamento local.",
  ],
  [
    "02",
    "Interfaces com React",
    "React, Hooks, Context API e TypeScript",
    "Componentes reutilizáveis, estado compartilhado, tipagem e integração com APIs.",
  ],
  [
    "03",
    "Aplicações com Next.js",
    "Next.js, App Router e CSS Modules",
    "Rotas dinâmicas, páginas estáticas, metadados e organização por responsabilidades.",
  ],
  [
    "04",
    "Qualidade e arquitetura",
    "Jest, Testing Library, GitHub Actions e Webpack",
    "Testes automatizados, integração contínua, PWA e comunicação entre micro frontends.",
  ],
];
export default function App() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <a href="#conteudo" className={styles.skip}>
        Pular para o conteúdo
      </a>
      <header className={styles.header}>
        <a
          className={styles.brand}
          href="#inicio"
          aria-label="Lana Oliveira, início"
        >
          lo<span>.</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre mim</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a className={styles.navContact} href="#contato">
            Vamos conversar <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <main id="conteudo">
        <section id="inicio" className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>
              LANA OLIVEIRA / DESENVOLVIMENTO WEB
            </p>
            <h1>
              Transformando
              <br />
              aprendizado em
              <br />
              <em>experiências digitais.</em>
            </h1>
            <p className={styles.intro}>
              Estudante de Engenharia de Software, construindo interfaces com
              propósito e uma base sólida em desenvolvimento Full Stack Java.
            </p>
            <div className={styles.actions}>
              <a href="#projetos" className={styles.primary}>
                Explore meus projetos <span aria-hidden="true">↓</span>
              </a>
              <a
                href="https://github.com/Evelin563"
                target="_blank"
                rel="noreferrer"
                className={styles.textButton}
              >
                Meu GitHub ↗
              </a>
            </div>
          </div>
          <div className={styles.portraitArea}>
            <div className={styles.portraitFrame}>
              <img
                src="./images/lana.jpg"
                alt="Foto de perfil de Lana Oliveira no GitHub"
                width="500"
                height="580"
              />
              <span className={styles.photoLabel}>
                Lana Oliveira
                <br />
                <small>Aprender. Criar. Evoluir.</small>
              </span>
            </div>
            <div className={styles.caption}>
              <span>Do primeiro HTML ao React.</span>
              <span>Uma construção contínua.</span>
            </div>
          </div>
        </section>
        <div className={styles.stats}>
          <p>
            <strong>20</strong> projetos com código
          </p>
          <p>
            <strong>01</strong> trajetória em evolução
          </p>
          <p>
            <strong>∞</strong> vontade de aprender
          </p>
        </div>
        <Section
          id="projetos"
          eyebrow="01 / PROJETOS"
          title="Aprendizado que ganha forma."
        >
          <div className={styles.sectionIntro}>
            <p>
              Uma coleção dos trabalhos desenvolvidos ao longo do curso. Cada
              projeto representa um novo desafio, uma tecnologia e um passo
              adiante.
            </p>
            <span>20 PROJETOS · MÓDULOS 02–33</span>
          </div>
          <div className={styles.grid}>
            {projects.map((p) => (
              <ProjectCard key={p.module} project={p} onOpen={setSelected} />
            ))}
          </div>
        </Section>
        <Section
          id="sobre"
          eyebrow="02 / SOBRE MIM"
          title="Curiosidade como ponto de partida."
          className={styles.about}
        >
          <div className={styles.aboutGrid}>
            <p className={styles.largeText}>
              Olá, sou a Lana.
              <br />
              Gosto de entender como as coisas funcionam — e de aprender
              construindo.
            </p>
            <div>
              <p>
                Sou estudante de Engenharia de Software. Durante o curso de Full
                Stack Java, venho desenvolvendo minha base em programação e
                transformando os exercícios em experiências para a web.
              </p>
              <p>
                Minha trajetória começa com HTML e CSS, passa por JavaScript e
                APIs, e avança para React, TypeScript e Next.js. Também exploro
                testes, publicação automatizada e micro frontends.
              </p>
              <p>
                Busco criar soluções funcionais, acessíveis e bem organizadas.
                Os trabalhos deste portfólio apresentam minha experiência
                prática de estudo e a evolução do meu código.
              </p>
              <a
                className={styles.textButton}
                href="mailto:lanasiqueira26@gmail.com"
              >
                lanasiqueira26@gmail.com ↗
              </a>
            </div>
          </div>
        </Section>
        <Section
          id="habilidades"
          eyebrow="03 / HABILIDADES"
          title="Uma base que continua crescendo."
        >
          <div className={styles.skillGrid}>
            {skills.map(([n, title, tech, description]) => (
              <article key={n} className={styles.skill}>
                <span>{n}</span>
                <h3>{title}</h3>
                <strong>{tech}</strong>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </Section>
        <section id="contato" className={styles.contact}>
          <p className={styles.eyebrow}>04 / CONTATO</p>
          <h2>
            Uma boa conversa pode ser
            <br />o começo de algo <em>novo.</em>
          </h2>
          <p>
            Para conversar sobre projetos, oportunidades ou desenvolvimento web:
          </p>
          <a className={styles.email} href="mailto:lanasiqueira26@gmail.com">
            lanasiqueira26@gmail.com ↗
          </a>
          <a
            className={styles.github}
            href="https://github.com/Evelin563"
            target="_blank"
            rel="noreferrer"
          >
            GitHub / Evelin563 ↗
          </a>
        </section>
      </main>
      <footer className={styles.footer}>
        <a href="#inicio" className={styles.brand}>
          lo<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Lana Oliveira</span>
        <span>Feito com React e aprendizado contínuo.</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
      {selected && (
        <ProjectDialog project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
