import { createContext, useContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  const addToBasket = (product) => {
    //uses previous state of basket to update the basket
    setBasket((prev) => {
      const existingItemIndex = prev.findIndex((item) => item._id === product._id);
      if (existingItemIndex !== -1) {
        // If item exists, update quantity
        const updatedBasket = [...prev];
        updatedBasket[existingItemIndex] = {
          //spreads existing product properties, then updates quantity
          ...updatedBasket[existingItemIndex],
          quantity: updatedBasket[existingItemIndex].quantity + 1,
        };
        return updatedBasket;
      }
      // If item doesn't exist, add the new product (...prev), and gives property of quantity: 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item._id !== id));
  };

  const incrementBasket = (id) => {
    setBasket((prev) => {
      const updatedBasket = [...prev];
      const item = updatedBasket.find((item) => item._id === id);
      if (item) {
        item.quantity += 1;
      }
      return updatedBasket;
    });
  };

  const decrementBasket = (id) => {
    setBasket((prev) => {
      const updatedBasket = prev.map((item) =>
      //math max ensures that quantity never goes below 0, returns original item if there is not a match of ID
        item._id === id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
      );
      return updatedBasket.filter((item) => item.quantity > 0); // Remove items with quantity 0
    });
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, incrementBasket, decrementBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  return useContext(BasketContext);
}
