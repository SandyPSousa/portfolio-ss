import Card from "../Card";
import Section from "../Section";
import styles from "./styles.module.css";
import { mySkills } from "./constants";

export default function Habilidades() {
  return (
    <Section id="skills" title="Habilidades">
      <ul className={styles.grid_container}>
        {mySkills.map((skill) => (
          <Card key={skill.id} title={skill.title} stars={skill.stars} />
        ))}
      </ul>
    </Section>
  );
}
