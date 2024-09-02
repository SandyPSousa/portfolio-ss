import styles from "./styles.module.css";
import { links } from "./constants";

export default function Footer() {
  return (
    <footer className={styles.footer} onSubmit={(e) => e.preventDefault()}>
      <h2>✨ Contrate-me</h2>
      <hr style={{ borderColor: "#fff" }} />
      <div className={styles.footer_container}>
        <form className={styles.footer_form}>
          <label>
            Nome: <input type="text" placeholder="Seu nome:" />
          </label>
          <label>
            E-mail: <input type="email" placeholder="nome@email.com" />
          </label>
          <label>
            Mensagem:
            <textarea placeholder="Olá, gostei do seu trabalho e ..."></textarea>
          </label>
          <button>Enviar</button>
        </form>
        <ul className={styles.footer_nav}>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.ref} target={link.target}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footer_copyright}>
        <p>© Sandy Sousa</p>
      </div>
    </footer>
  );
}
