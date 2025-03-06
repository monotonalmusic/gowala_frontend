import { useBasket } from "../../context/AppContext";
import styles from "./basketitem.module.css";

const BasketItem = ({ item }) => {
  const { basket, removeFromBasket, incrementBasket, decrementBasket } =
    useBasket();

  return (
    <div className={styles.basketItem}>
      <div className={styles.itemInfo}>
        <img src={item.image} alt={item.name} className={styles.itemImage} />
        <div>
          <h3 className={styles.itemName}>{item.title}</h3>
          <p className={styles.itemPrice}>{item.price},-</p>
        </div>
        <button
          className={styles.removeButton}
          onClick={() => removeFromBasket(item._id)}
        >
          ✖
        </button>
      </div>

      <div className={styles.quantityControls}>
        <button
          className={styles.quantityButton}
          onClick={() => decrementBasket(item._id)}
        >
          −
        </button>
        <span className={styles.quantity}>{item.quantity}</span>
        <button
          className={styles.quantityButton}
          onClick={() => decrementBasket(item._id)}
        >
          +
        </button>
      </div>
      <div className={styles.totalPriceDiv}>
        <p className={styles.totalPrice}>
          <span className={styles.totalSpan}>Total: </span>
          {item.price * item.quantity},-
        </p>
      </div>
    </div>
  );
};

export default BasketItem;
