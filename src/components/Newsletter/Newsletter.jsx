import styles from "./newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}><span className={styles.underline}>Nyhedsbrev</span></h2>
        <p className={styles.subtitle}>Få nyhederne fra gården på din mail.</p>
        <p className={styles.description}>
          Tilmeld dig vores nyhedsbrev - så kan du altid følge med i, hvad der sker på farmen.
        </p>
        <input type="email" placeholder="Din email" className={styles.input} />
        <button className={styles.button}>Tilmeld</button>
      </div>
    </div>
  );
};

export default Newsletter;