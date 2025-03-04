import styles from "./kontaktpage.module.css";

const KontaktPage = () => {
  return (
    <div className={styles.kontaktContainer}>
      <h1 className={styles.title}>Send en besked til os</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <input type="text" id="name" className={styles.input} placeholder="Dit navn" />
        </div>
        <div className={styles.formGroup}>
          <input type="email" id="email" className={styles.input} placeholder="Din email" />
        </div>
        <div className={styles.formGroup}>
          <textarea id="message" className={styles.textarea} placeholder="Din besked" />
        </div>
        <button className={styles.button}>Send besked</button>
      </form>
    </div>
  );
};

export default KontaktPage;

