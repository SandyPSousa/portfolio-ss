import styles from "./styles.module.css";

export default function Section({ children, id, title }) {
  return (
    <section id={id} className={styles.page}>
      <h2>✨ {title}</h2>
      <hr />
      {children}
    </section>
  );
}
