import { useEffect, useRef } from "react";
import styles from "../App.module.css";
export default function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    // O diálogo nativo contém o foco; ao fechar, devolvemos a navegação ao card.
    const dialog = ref.current;
    const previousFocus = document.activeElement;
    dialog.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = old;
      previousFocus?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby="project-title"
    >
      <div className={styles.dialogContent}>
        <button
          className={styles.close}
          aria-label="Fechar detalhes"
          onClick={onClose}
        >
          ×
        </button>
        <img
          src={project.image}
          alt={`Captura de tela de ${project.title}`}
          width="1200"
          height="760"
        />
        <p className={styles.eyebrow}>
          {project.category}
        </p>
        <h2 id="project-title">{project.title}</h2>
        <p>{project.description}</p>
        <h3>O que desenvolvi</h3>
        <p>{project.details}</p>
        <h3>Aprendizados</h3>
        <p>{project.learning}</p>
        <ul className={styles.tags}>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {project.note && <p className={styles.note}>{project.note}</p>}
        <div className={styles.actions}>
          {project.repo && (
            <a
              className={styles.primary}
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              Ver repositório ↗
            </a>
          )}
          {project.demo && (
            <a
              className={styles.secondary}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Abrir demonstração ↗
            </a>
          )}
          {project.source && (
            <a className={styles.secondary} href={project.source} download>
              Baixar código-fonte ↓
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
}
