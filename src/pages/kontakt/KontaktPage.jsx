import styles from "./kontaktpage.module.css";
import { icons } from "../../services/icons";

const KontaktPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.kontaktContainer}>
        <h1 className={styles.title}>Send en besked til os</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              className={styles.input}
              placeholder="Dit navn"
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Din email"
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder="Din besked"
            />
          </div>
          <button className={styles.button}>Send besked</button>
        </form>
      </div>
      <div className={styles.hurtigContainer}>
        <h2>Hurtig kontakt?</h2>
        <p>Har du spørgsmål eller ønsker du at høre mere om vores produkter? Kontakt os – vi står altid klar til at hjælpe!</p>
      <div className={styles.footerContactContainer}>
          <div className={styles.iconContainer}>{icons.FaPhone}</div>
          <div>
            <p>+88130-589-745-6987</p>
            <p>+1655-456-532</p>
          </div>
        </div>
        <div className={styles.footerOpeningContainer}>
          <div className={styles.iconContainer}>{icons.FaClock}</div>
          <div>
            <p>Monday - Friday: 8:00 - 16:00</p>
            <p>Saturday: 8:00 - 12:00</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className={styles.footerAddressContainer}>
          <div className={styles.iconContainer}>{icons.FaLocationDot}</div>
          <div>
            <p>1234 Street Name, City Name, United States</p>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default KontaktPage;
