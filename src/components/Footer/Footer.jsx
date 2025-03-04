import { icons } from "../../services/icons";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="/logo.png" alt="" />
      <div className={styles.footerTextContainer}>
        <p>
        Gowala Farms er en dedikeret gård, der producerer friske mejeriprodukter
        og kvalitetskød med fokus på dyrevelfærd, bæredygtighed og autentisk
        smag.
        </p>
        
      </div>
      <div className={styles.footerContactContainer}>
        <div className={styles.iconContainer}>
            {icons.FaPhone}
        </div>
        <div>
            <p>+88130-589-745-6987</p>
            <p>+1655-456-532</p>
        </div>
      </div>
      <div className={styles.footerOpeningContainer}>
        <div className={styles.iconContainer}>
            {icons.FaClock}
        </div>
        <div>
            <p>Monday - Friday: 8:00 - 16:00</p>
            <p>Saturday: 8:00 - 12:00</p>
            <p>Sunday: Closed</p>
        </div>
      </div>
      <div className={styles.footerAddressContainer}>
        <div className={styles.iconContainer}>
            {icons.FaLocationDot}
        </div>
        <div>
            <p>1234 Street Name, City Name, United States</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
