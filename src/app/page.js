import styles from "./styles/portfolio.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <img
        src="https://avatars.githubusercontent.com/u/000000?v=4"
        alt="Aditya"
        className={styles.avatar}
      />
      <h1 className={styles.title}>Hi, I’m Aditya 👋</h1>
      <p className={styles.desc}>
        I’m a web developer passionate about building modern, fast, and
        creative web experiences with React, Next.js, and AI tools.
      </p>

      <div className={styles.buttons}>
        <a href="https://github.com/" className={styles.github}>
          GitHub
        </a>
        <a href="https://linkedin.com/" className={styles.linkedin}>
          LinkedIn
        </a>
        <a href="mailto:your@email.com" className={styles.contact}>
          Contact
        </a>
      </div>
    </main>
  );
}
