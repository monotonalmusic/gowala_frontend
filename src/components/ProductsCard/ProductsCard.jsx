import AddToCartButton from "../AddToCartButton/AddToCartButton";
import styles from "./productscard.module.css";

const ProductsCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      {product.discount > 0 && (
        <div className={styles.discountBadge}>-{product.discount}%!</div>
      )}
      <img src={product.image} alt={product.title} />
      <h3 className={styles.productTitle}>{product.title}</h3>
      <p className={styles.productPrice}>{product.price}kr</p>
      <AddToCartButton></AddToCartButton>
    </div>
  );
};

export default ProductsCard;
