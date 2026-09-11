import styles from "../App.module.css";
export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
