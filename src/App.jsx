import { useEffect, useState } from "react";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ProjectDialog from "./components/ProjectDialog";
import { projects } from "./data/projects";
import styles from "./App.module.css";

const navItems = [["inicio","Início","⌂"],["sobre","Sobre mim","◉"],["habilidades","Habilidades","◇"],["projetos","Projetos","▦"],["formacao","Formação","▤"],["certificados","Certificados","★"],["contato","Contato","✉"]];
const technologies = ["HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Bootstrap","Sass","Git","GitHub","Jest","Webpack"];
const featuredProjects = projects.filter(({ module }) => [11, 14, 15].includes(module));
const certificates = [
  { title: "The Complete Full-Stack Web Development Bootcamp", issuer: "Udemy", hours: "61,5 horas", date: "27 jun. 2025", area: "Full Stack" },
  { title: "Learn to Program", issuer: "FIAP · Nano Courses", hours: "60 horas", date: "21 jun. 2025", area: "Programação" },
  { title: "Python", issuer: "FIAP · Nano Courses", hours: "80 horas", date: "27 jun. 2025", area: "Python" },
  { title: "Android", issuer: "FIAP · Nano Courses", hours: "80 horas", date: "19 jul. 2026", area: "Mobile" },
  { title: "Agentes Autônomos (Agentic AI)", issuer: "FIAP · Nano Courses", hours: "40 horas", date: "11 jul. 2026", area: "Tecnologia" },
  { title: "Inteligência Artificial", issuer: "EBAC", hours: "25 horas", date: "16 maio 2026", area: "Tecnologia" },
  { title: "Introdução à Programação", issuer: "EBAC", hours: "18 horas", date: "14 abr. 2026", area: "Programação" },
  { title: "Excel Básico", issuer: "SENAR", hours: "15 horas", date: "2025", area: "Produtividade" },
];

export default function App() {
  const [selected, setSelected] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -55%", threshold: [0, .2, .5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <div className={`${styles.app} ${expanded ? styles.menuExpanded : ""}`}>
    <a href="#conteudo" className={styles.skip}>Pular para o conteúdo</a>
    <aside className={styles.sidebar} aria-label="Navegação principal">
      <button className={styles.menuButton} onClick={() => setExpanded(value => !value)} aria-expanded={expanded} aria-label={expanded ? "Recolher menu" : "Expandir menu"}><span aria-hidden="true">☰</span><b>Menu</b></button>
      <nav>{navItems.map(([id,label,icon]) => <a key={id} href={`#${id}`} className={active===id ? styles.active : ""} aria-label={label} aria-current={active===id ? "location" : undefined}><span aria-hidden="true">{icon}</span><b>{label}</b></a>)}</nav>
      <a className={styles.sideGithub} href="https://github.com/Evelin563" target="_blank" rel="noreferrer" aria-label="GitHub de Lana"><span aria-hidden="true">GH</span><b>GitHub</b></a>
    </aside>
    <main id="conteudo" className={styles.content}>
      <section id="inicio" className={styles.hero}>
        <div className={styles.heroCopy}><p className={styles.eyebrow}>PORTFÓLIO · DESENVOLVIMENTO FRONT-END</p><h1>Olá, eu sou <em>Lana.</em></h1><h2>Desenvolvedora Front-End</h2><p className={styles.intro}>Estudante de Engenharia de Software, transformando aprendizado em interfaces funcionais, acessíveis e bem organizadas.</p><div className={styles.actions}><a href="#projetos" className={styles.primary}>Ver projetos <span aria-hidden="true">↗</span></a><a href="#contato" className={styles.secondary}>Entrar em contato</a></div><a className={styles.profileLink} href="https://github.com/Evelin563" target="_blank" rel="noreferrer">GitHub / Evelin563 ↗</a></div>
        <div className={styles.heroVisual} aria-hidden="true"><span>DESIGN</span><strong>&lt;/&gt;</strong><small>APRENDER · CRIAR · EVOLUIR</small></div>
      </section>
      <section className={styles.stats} aria-label="Resumo do portfólio"><p><strong>{featuredProjects.length}</strong><span>projetos<br/>em destaque</span></p><p><strong>{certificates.length}</strong><span>certificados<br/>concluídos</span></p><p><strong>12</strong><span>tecnologias<br/>em prática</span></p></section>
      <Section id="sobre" eyebrow="SOBRE MIM" title="Curiosidade como ponto de partida." className={styles.about}><div className={styles.aboutGrid}><p className={styles.largeText}>Gosto de entender como as coisas funcionam — e de aprender construindo.</p><div><p>Sou estudante de Engenharia de Software. Durante o curso de Full Stack Java, venho desenvolvendo minha base em programação e transformando exercícios em experiências para a web.</p><p>Minha trajetória começa com HTML e CSS, passa por JavaScript e APIs, e avança para React, TypeScript e Next.js. Também exploro testes, publicação automatizada e micro frontends.</p></div></div></Section>
      <Section id="habilidades" eyebrow="HABILIDADES" title="Tecnologias que fazem parte da minha jornada."><div className={styles.techGrid}>{technologies.map((technology,index)=><article key={technology}><span>{String(index+1).padStart(2,"0")}</span><strong>{technology}</strong></article>)}</div></Section>
      <Section id="projetos" eyebrow="PROJETOS" title="Aprendizado que ganha forma."><div className={styles.sectionIntro}><p>Uma seleção de projetos que representa minha evolução na criação de interfaces responsivas e bem estruturadas.</p><span>{featuredProjects.length} PROJETOS</span></div><div className={styles.grid}>{featuredProjects.map(project=><ProjectCard key={project.module} project={project} onOpen={setSelected}/>)}</div><div className={styles.moreProjects}><a className={styles.primary} href="https://github.com/Evelin563" target="_blank" rel="noreferrer">Ver mais projetos <span aria-hidden="true">↗</span></a></div></Section>
      <Section id="formacao" eyebrow="FORMAÇÃO" title="Construindo uma base sólida." className={styles.education}><div className={styles.educationCard}><span>EM ANDAMENTO</span><div><h3>Engenharia de Software</h3><p>Formação acadêmica voltada ao desenvolvimento, à arquitetura e à qualidade de software.</p></div></div><div className={styles.educationCard}><span>FORMAÇÃO PRÁTICA</span><div><h3>Full Stack Java</h3><p>Projetos progressivos em fundamentos web, React, Next.js, testes, APIs, desempenho e arquitetura front-end.</p></div></div></Section>
      <Section id="certificados" eyebrow="CERTIFICADOS" title="Formação complementar."><p className={styles.certificateIntro}>Cursos concluídos em desenvolvimento, programação, tecnologia e produtividade.</p><div className={styles.certificateGrid}>{certificates.map(certificate=><article key={certificate.title} className={styles.certificateCard}><div><span className={styles.certificateArea}>{certificate.area}</span><span className={styles.certificateMark} aria-hidden="true">✦</span></div><h3>{certificate.title}</h3><p>{certificate.issuer}</p><footer><strong>{certificate.hours}</strong><span>{certificate.date}</span></footer></article>)}</div><p className={styles.certificatePrivacy}>Os documentos originais e seus códigos de validação são mantidos em arquivo privado.</p></Section>
      <section id="contato" className={styles.contact}><p className={styles.eyebrow}>CONTATO</p><h2>Vamos criar algo <em>novo?</em></h2><p>Estou disponível para conversar sobre projetos, oportunidades e desenvolvimento web.</p><div className={styles.actions}><a className={styles.primary} href="https://wa.me/5546999004565" target="_blank" rel="noreferrer" aria-label="Conversar com Lana pelo WhatsApp">WhatsApp · (46) 99900-4565 <span aria-hidden="true">↗</span></a><a className={styles.secondary} href="mailto:lanasiqueira26@gmail.com">Enviar e-mail</a><a className={styles.secondary} href="https://www.linkedin.com/in/lana-evelin-de-oliveira-413982270/" target="_blank" rel="noreferrer">LinkedIn</a><a className={styles.secondary} href="https://github.com/Evelin563" target="_blank" rel="noreferrer">GitHub</a></div><a className={styles.email} href="mailto:lanasiqueira26@gmail.com">lanasiqueira26@gmail.com</a></section>
      <footer className={styles.footer}><span>© {new Date().getFullYear()} Lana Oliveira</span><span>Desenvolvido com React.</span></footer>
    </main>
    {selected&&<ProjectDialog project={selected} onClose={()=>setSelected(null)}/>}
  </div>;
}
