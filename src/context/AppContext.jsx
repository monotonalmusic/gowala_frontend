import { createContext, useContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  const addToBasket = (product) => {
    setBasket((prev) => {
      const existingItemIndex = prev.findIndex((item) => item._id === product._id);
      if (existingItemIndex !== -1) {
        // If item exists, update quantity
        const updatedBasket = [...prev];
        updatedBasket[existingItemIndex] = {
          ...updatedBasket[existingItemIndex],
          quantity: updatedBasket[existingItemIndex].quantity + 1,
        };
        return updatedBasket;
      }
      // If item doesn't exist, add it with quantity 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item._id !== id));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  return useContext(BasketContext);
}
