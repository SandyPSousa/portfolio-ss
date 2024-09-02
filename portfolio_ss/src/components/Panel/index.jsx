// import styles from "./styles.module.css";

// export default function Panel({ title }) {
//   return (
//     <li className={styles.panel}>
//       <div className={styles.panel_banner}></div>
//       <div className={styles.panel_content}>
//         <h3>{title}</h3>
//       </div>
//     </li>
//   );
// }

import styles from "./styles.module.css";

export default function Panel({ title, description, link }) {
  return (
    <li className={styles.panel}>
      <div className={styles.panel_banner}></div>
      <div className={styles.panel_content}>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Ver Projeto
          </a>
        )}
      </div>
    </li>
  );
}
