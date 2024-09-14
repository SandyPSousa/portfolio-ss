// import Panel from "../Panel";
// import Section from "../Section";
// import styles from "./styles.module.css";
// import { projetos } from "./constants";

// export default function Projetos() {
//   return (
//     <Section id="projects" title="Projetos">
//       <ul className={styles.grid_container}>
//         {projetos.map((projeto) => (
//           <Panel key={projeto.id} title={projeto.title} />
//         ))}
//       </ul>
//     </Section>
//   );
// }
import Panel from "../Panel";
import Section from "../Section";
import styles from "./styles.module.css";
import { projetos } from "./constants";

export default function Projetos() {
  return (
    <Section id="projects" title="Projetos">
      <ul className={styles.grid_container}>
        {projetos.map((projeto) => (
          <Panel
            key={projeto.id}
            title={projeto.title}
            description={projeto.description}
            link={projeto.link}
          />
        ))}
      </ul>
    </Section>
  );
}
