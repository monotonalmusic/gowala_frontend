import { useBasket } from "../../context/AppContext";

export default function Basket() {
  const { basket, removeFromBasket, clearBasket } = useBasket();

  return (
    <div>
      <h2>Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {basket.map((item) => (
            <li key={item._id}>
              {item.name} ({item.quantity}) - ${item.price * item.quantity}
              <button onClick={() => removeFromBasket(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {basket.length > 0 && <button onClick={clearBasket}>Clear Basket</button>}
    </div>
  );
}
