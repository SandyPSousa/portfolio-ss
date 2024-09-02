import styles from "./styles.module.css";

export default function Card({ title, stars = 1 }) {
  return (
    <li className={styles.card}>
      <h3 className={styles.card_title}>{title}</h3>
      <div className={styles.card_content}>
        {Array.from({ length: stars }, (_, i) => (
          <span key={i} className="material-symbols-outlined">
            pets
          </span>
        ))}
      </div>
    </li>
  );
}
