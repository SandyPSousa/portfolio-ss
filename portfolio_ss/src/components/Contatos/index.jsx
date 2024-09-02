// import Section from "../Section";
// import styles from "./styles.module.css";
// import { contatos } from "./constants";

// export default function Contatos() {
//   return (
//     <Section id="contacts" title="Contatos">
//       <ul className={styles.contacts_list}>
//         {contatos.map((contato) => (
//           <li key={contato.id}>
//             <span className="material-symbols-outlined">link</span>
//             <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
//               {contato.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </Section>
//   );
// }
import Section from "../Section";
import styles from "./styles.module.css";
import { contatos } from "./constants";

export default function Contatos() {
  return (
    <Section id="contacts" title="Contatos">
      <ul className={styles.contacts_list}>
        {contatos.map((contato) => (
          <li key={contato.id}>
            <span className="material-symbols-outlined">link</span>
            <a href={contato.url} target="_blank" rel="noopener noreferrer">
              {contato.name}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

