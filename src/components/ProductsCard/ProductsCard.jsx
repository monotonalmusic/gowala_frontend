import { useBasket } from "../../context/AppContext";
import styles from "./productscard.module.css";

const ProductsCard = ({ product }) => {

  const { addToBasket } = useBasket();

  return (
    <div className={styles.productCard}>
      {product.discount > 0 && (
        <div className={styles.discountBadge}>-{product.discount}%!</div>
      )}
      <img src={product.image} alt={product.title} />
      <h3 className={styles.productTitle}>{product.title}</h3>
      <p className={styles.productPrice}>{product.price}kr</p>
      <button className={styles.button} onClick={() => addToBasket(product)}>
            <span className={styles.icon}>🛍️</span>
            Tilføj til kurv
          </button>
    </div>
  );
};

export default ProductsCard;
