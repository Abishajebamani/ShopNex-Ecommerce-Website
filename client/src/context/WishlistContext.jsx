import { createContext, useContext, useEffect, useState } from "react";
import API from "../services/api";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);

  const fetchWishlist = async () => {
    try {
      const response = await API.get("/wishlist");

      setWishlist(response.data.wishlist);
      setWishlistCount(response.data.wishlist.length);

    } catch (error) {
      console.error("Failed to fetch wishlist:", error);
      setWishlist([]);
      setWishlistCount(0);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        fetchWishlist,
        setWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);