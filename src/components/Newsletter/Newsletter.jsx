import { useState } from "react";
import styles from "./newsletter.module.css";

const Newsletter = () => {

  const emailInput = document.querySelector("input[type='email']");

  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    setSubmit(true);
    e.preventDefault();
    setEmail(emailInput.value);
    emailInput.value = "";



    
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Nyhedsbrev</h2>
        <p className={styles.subtitle}>Få nyhederne fra gården på din mail.</p>
        <p className={styles.description}>
          Tilmeld dig vores nyhedsbrev - så kan du altid følge med i, hvad der sker på farmen.
        </p>
        <input type="email" placeholder="Din email" className={styles.input} />
        <p className={styles.email}>{submit ? `Tak for din tilmelding, ${email}.` : ""}</p>
        <button className={styles.button} onClick={handleSubmit}>Tilmeld</button>
      </div>
    </div>
  );
};

export default Newsletter;