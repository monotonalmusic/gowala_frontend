import { useBasket } from "../../context/AppContext";
import styles from "./basket.module.css"; // Import CSS Module

export default function Basket() {
  const { basket, removeFromBasket, clearBasket } = useBasket();

  return (
    <div className={styles.basketContainer}>
      {basket.length === 0 ? (
        <p className={styles.emptyMessage}>Your basket is empty.</p>
      ) : (
        <>
          <ul className={styles.basketList}>
            {basket.map((item) => (
              <li key={item._id} className={styles.basketItem}>
                <div className={styles.itemInfo}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.itemImage}
                  />
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
                  <button className={styles.quantityButton}>−</button>
                  <span className={styles.quantity}>{item.quantity}</span>
                  <button className={styles.quantityButton}>+</button>
                </div>

                <div className={styles.totalPriceDiv}>
                  <p className={styles.totalPrice}>
                    <span className={styles.totalSpan}>Total: </span>{item.price * item.quantity},-
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.basketSummary}>
            <p className={styles.totalAmount}>
              I alt{" "}
              <span>
                {basket.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
                ,-
              </span>
            </p>
            <input
              type="email"
              placeholder="Din email"
              className={styles.emailInput}
            />
            <button className={styles.checkoutButton}>Afgiv ordre</button>
          </div>
        </>
      )}
    </div>
  );
}
