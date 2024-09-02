import styles from "./styles.module.css";

export default function BackToTopButton() {
  return (
    <a className={styles.back_to_top_button} href="#header" role="button">
      <div>
        <span className="material-symbols-outlined">keyboard_arrow_up</span>
      </div>
    </a>
  );
}
