import { createContext, useContext, useEffect, useState } from "react";
import API from "../services/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  // Fetch cart count from backend
  const fetchCartCount = async () => {
    try {
      const response = await API.get("/cart");

      // Total quantity of all products
      const total = response.data.cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      setCartCount(total);
    } catch (error) {
      console.error("Failed to fetch cart count:", error);
      setCartCount(0);
    }
  };

  // Load cart count when app starts
  useEffect(() => {
    fetchCartCount();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartCount,
        fetchCartCount,
        setCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
