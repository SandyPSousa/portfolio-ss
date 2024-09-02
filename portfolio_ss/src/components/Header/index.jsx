import styles from "./styles.module.css";

export default function Header() {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.header_hero}>
        <div className={styles.header_hero_cover}></div>
      </div>
    </header>
  );
}
