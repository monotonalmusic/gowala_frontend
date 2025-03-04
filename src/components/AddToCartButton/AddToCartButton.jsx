import styles from "./addtocartbutton.module.css";

const AddToCartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>🛍️</span>
      Tilføj til kurv
    </button>
  );
};

export default AddToCartButton;
