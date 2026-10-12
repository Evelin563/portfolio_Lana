import { useEffect, useState } from "react";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ProjectDialog from "./components/ProjectDialog";
import { projects } from "./data/projects";
import styles from "./App.module.css";

const navItems = [["inicio","Início","⌂"],["sobre","Sobre mim","◉"],["habilidades","Habilidades","◇"],["projetos","Projetos","▦"],["formacao","Formação","▤"],["certificados","Certificados","★"],["contato","Contato","✉"]];
const technologies = ["HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Python","Java","Sass","Bootstrap","Tailwind CSS","Axios","APIs REST","Jest","Testing Library","Webpack","GitHub Actions","Power BI","Excel"];
const featuredProjects = projects.filter(({ module }) => [11, 14, 15].includes(module));
const skillGroups = [
  { title: "Front-End", text: "Interfaces responsivas, componentização, React Hooks, CRUD, integração com APIs, acessibilidade, SEO técnico e performance web." },
  { title: "DevOps e ferramentas", text: "Git, GitHub, CI/CD, Vercel, GitHub Pages, VS Code e Chrome DevTools." },
  { title: "Dados e processos", text: "Power BI, Excel, KPIs, Scrum, Kanban, PDCA, 5W2H, 5S, POPs e documentação de processos." },
];
const languages = ["Inglês · Avançado", "Espanhol · Avançado", "Alemão · Intermediário", "Coreano · Em desenvolvimento"];
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
        <div className={styles.heroCopy}><p className={styles.eyebrow}>PORTFÓLIO · DESENVOLVIMENTO DE SOFTWARE</p><h1>Olá, eu sou <em>Lana.</em></h1><h2>Desenvolvedora de Software · Full Stack Java</h2><p className={styles.intro}>Estudante de Engenharia de Software com experiência em desenvolvimento web, análise de dados, dashboards e melhoria contínua. Transformo problemas em soluções funcionais, organizadas e orientadas a resultados.</p><div className={styles.actions}><a href="#projetos" className={styles.primary}>Ver projetos <span aria-hidden="true">↗</span></a><a href="#contato" className={styles.secondary}>Entrar em contato</a></div><div className={styles.profileLinks}><a href="https://github.com/Evelin563" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/lana-evelin-de-oliveira-413982270/" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>Palmas · Paraná</span></div></div>
        <div className={styles.heroVisual} aria-hidden="true"><span>DESIGN</span><strong>&lt;/&gt;</strong><small>APRENDER · CRIAR · EVOLUIR</small></div>
      </section>
      <section className={styles.stats} aria-label="Resumo do portfólio"><p><strong>{featuredProjects.length}</strong><span>projetos<br/>em destaque</span></p><p><strong>{certificates.length}</strong><span>certificados<br/>concluídos</span></p><p><strong>{technologies.length}</strong><span>tecnologias e<br/>ferramentas</span></p></section>
      <Section id="sobre" eyebrow="SOBRE MIM" title="Tecnologia, dados e melhoria contínua." className={styles.about}><div className={styles.aboutGrid}><p className={styles.largeText}>Gosto de entender problemas, organizar informações e construir soluções que geram resultados.</p><div><p>Sou estudante de Engenharia de Software pela UniCesumar e de Full Stack Java pela EBAC. Desenvolvo minha base em programação com projetos práticos em React, TypeScript, Next.js, APIs e qualidade de software.</p><p>Minha experiência profissional em ambiente industrial fortaleceu meu pensamento analítico, a atenção aos detalhes e a capacidade de transformar dados em decisões por meio de Power BI, Excel e indicadores.</p></div></div></Section>
      <Section id="experiencia" eyebrow="EXPERIÊNCIA PROFISSIONAL" title="Resultados além do código."><div className={styles.experienceHeader}><div><h3>Marply</h3><p>Paraná · 2025–atual</p></div><span>Líder de Produção Trainee</span></div><div className={styles.experienceGrid}><div><h4>Liderança e dados</h4><ul><li>Desenvolvimento de dashboards em Power BI e Excel para ampliar a visibilidade dos indicadores.</li><li>Análise de dados produtivos para identificar desvios, gargalos e oportunidades de melhoria.</li><li>Apoio à implementação de 5S, Kanban e PDCA.</li></ul></div><div><h4>Qualidade e processos</h4><ul><li>Inspeção de produtos e processos conforme especificações técnicas.</li><li>Registro e análise de não conformidades e apoio às ações corretivas.</li><li>Criação de POPs, instruções de trabalho e relatórios de acompanhamento.</li></ul></div></div></Section>
      <Section id="habilidades" eyebrow="HABILIDADES" title="Tecnologias e competências."><div className={styles.techGrid}>{technologies.map((technology,index)=><article key={technology}><span>{String(index+1).padStart(2,"0")}</span><strong>{technology}</strong></article>)}</div><div className={styles.skillGroups}>{skillGroups.map(group=><div key={group.title}><h3>{group.title}</h3><p>{group.text}</p></div>)}</div><div className={styles.languages}><h3>Idiomas</h3><ul>{languages.map(language=><li key={language}>{language}</li>)}</ul></div></Section>
      <Section id="projetos" eyebrow="PROJETOS" title="Aprendizado que ganha forma."><div className={styles.projectIntro}><div className={styles.sectionIntro}><p>Uma seleção de projetos que representa minha evolução na criação de interfaces responsivas e bem estruturadas.</p><span>{featuredProjects.length} PROJETOS</span></div><div className={styles.typingMascot}><span className={styles.typingLabel}>Criando projetos<span aria-hidden="true">...</span></span><img src="./images/lana-mascot-computer.png" alt="Mascote de Lana trabalhando em um computador" width="280" height="280"/></div></div><div className={styles.grid}>{featuredProjects.map(project=><ProjectCard key={project.module} project={project} onOpen={setSelected}/>)}</div><div className={styles.moreProjects}><a className={styles.primary} href="https://github.com/Evelin563" target="_blank" rel="noreferrer">Ver mais projetos <span aria-hidden="true">↗</span></a></div></Section>
      <Section id="formacao" eyebrow="FORMAÇÃO" title="Construindo uma base sólida." className={styles.education}><div className={styles.educationCard}><span>2024–2029</span><div><h3>Engenharia de Software · Bacharelado</h3><p>UniCesumar · Formação em desenvolvimento, arquitetura e qualidade de software.</p></div></div><div className={styles.educationCard}><span>2025–ATUAL</span><div><h3>Full Stack Java · Curso profissionalizante</h3><p>EBAC · Projetos progressivos em fundamentos web, React, Next.js, testes, APIs, desempenho e arquitetura front-end.</p></div></div></Section>
      <Section id="certificados" eyebrow="CERTIFICADOS" title="Formação complementar."><p className={styles.certificateIntro}>Cursos concluídos em desenvolvimento, programação, tecnologia e produtividade.</p><div className={styles.certificateGrid}>{certificates.map(certificate=><article key={certificate.title} className={styles.certificateCard}><div><span className={styles.certificateArea}>{certificate.area}</span><span className={styles.certificateMark} aria-hidden="true">✦</span></div><h3>{certificate.title}</h3><p>{certificate.issuer}</p><footer><strong>{certificate.hours}</strong><span>{certificate.date}</span></footer></article>)}</div></Section>
      <section id="contato" className={styles.contact}><p className={styles.eyebrow}>CONTATO</p><h2>Vamos criar algo <em>novo?</em></h2><p>Estou disponível para conversar sobre projetos, oportunidades e desenvolvimento web.</p><div className={styles.actions}><a className={styles.primary} href="https://wa.me/5546999004565" target="_blank" rel="noreferrer" aria-label="Conversar com Lana pelo WhatsApp">WhatsApp · (46) 99900-4565 <span aria-hidden="true">↗</span></a><a className={styles.secondary} href="mailto:lanasiqueira26@gmail.com">Enviar e-mail</a><a className={styles.secondary} href="https://www.linkedin.com/in/lana-evelin-de-oliveira-413982270/" target="_blank" rel="noreferrer">LinkedIn</a><a className={styles.secondary} href="https://github.com/Evelin563" target="_blank" rel="noreferrer">GitHub</a></div><a className={styles.email} href="mailto:lanasiqueira26@gmail.com">lanasiqueira26@gmail.com</a></section>
      <footer className={styles.footer}><span>© {new Date().getFullYear()} Lana Oliveira</span></footer>
    </main>
    <div className={styles.welcomeMascot} role="status" aria-label="Olá! Eu sou a Lana."><div className={styles.speechBubble}>Olá! Eu sou a Lana.</div><img src="./images/lana-mascot-wave.png" alt="Mascote de Lana acenando" width="220" height="220"/></div>
    {selected&&<ProjectDialog project={selected} onClose={()=>setSelected(null)}/>}
  </div>;
}
