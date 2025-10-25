import styles from "./navbar.module.css";

export default function Navbar() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills",href: "#skills"},
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Aditya Reddy</div>
      <ul className={styles.navLinks}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}