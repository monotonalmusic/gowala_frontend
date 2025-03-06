import Basket from "../../components/Basket/Basket";
import styles from "./checkoutpage.module.css";

const CheckoutPage = () => {
  return (
    <div className={styles.container}>
      <Basket></Basket>
      <h1 className={styles.title}>Checkout</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input type="text" id="name" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input type="email" id="email" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address" className={styles.label}>
            Address
          </label>
          <input type="text" id="address" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="city" className={styles.label}>
            City
          </label>
          <input type="text" id="city" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="zip" className={styles.label}>
            Zip
          </label>
          <input type="text" id="zip" className={styles.input} />
        </div>
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
