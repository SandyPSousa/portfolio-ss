import styles from "./styles.module.css";

export default function Panel({ title }) {
  return (
    <li className={styles.panel}>
      <div className={styles.panel_banner}></div>
      <div className={styles.panel_content}>
        <h3>{title}</h3>
      </div>
    </li>
  );
}
