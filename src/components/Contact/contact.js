import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1 className={styles.title}>Contact</h1>
          <h2 className={styles.heading}>Have a project?</h2>
          <h2 className={styles.heading}>Let&apos;s Talk!</h2>
          <button className={styles.submitBtn}>Submit</button>
        </div>

        <div className={styles.rightContent}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className={styles.input}
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className={styles.input}
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                className={styles.textarea}
                required
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}