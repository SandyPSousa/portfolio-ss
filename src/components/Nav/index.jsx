import styles from "./styles.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.nav_list}>
        <li>
          <a href="#about-me">Sobre mim</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#contacts">Contatos</a>
        </li>
      </ul>
    </nav>
  );
}
