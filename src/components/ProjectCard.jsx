import styles from "../App.module.css";
export default function ProjectCard({ project, onOpen }) {
  return (
    <article className={styles.card}>
      <button
        className={styles.coverButton}
        onClick={() => onOpen(project)}
        aria-label={`Ver detalhes de ${project.title}`}
      >
        <img
          className={styles.cover}
          src={project.image}
          alt={`Captura de tela do projeto ${project.title}`}
          loading="lazy"
          width="1200"
          height="760"
        />
        <span className={styles.openIcon} aria-hidden="true">
          ↗
        </span>
      </button>
      <div className={styles.cardBody}>
        <p className={styles.meta}>
          <span>{project.category}</span>
        </p>
        <h3>
          <button onClick={() => onOpen(project)}>{project.title}</button>
        </h3>
        <p>{project.description}</p>
        <ul className={styles.tags}>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <button className={styles.textButton} onClick={() => onOpen(project)}>
          Conhecer o projeto <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
}
