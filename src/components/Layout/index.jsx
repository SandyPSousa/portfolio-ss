import styles from "./styles.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.layout_container}>{children}</div>
    </div>
  );
}
