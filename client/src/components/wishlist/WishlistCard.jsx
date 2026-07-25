import { FiHeart, FiShoppingCart, FiTrash2 } from "react-icons/fi";
import API from "../../services/api";
import { useCart } from "../../context/CartContext";

const WishlistCard = ({ product, fetchWishlist }) => {
  const { fetchCartCount } = useCart();

  // Remove from Wishlist
  const handleRemove = async () => {
    try {
      await API.delete(`/wishlist/${product.wishlist_id}`);

      await fetchWishlist();
    } catch (error) {
      console.error(error);
      alert("Failed to remove from wishlist.");
    }
  };

  // Add to Cart
  const handleAddToCart = async () => {
    try {
      await API.post("/cart", {
        product_id: product.product_id,
        quantity: 1,
      });

      await fetchCartCount();

      alert("Product added to cart successfully!");
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
          "Failed to add to cart."
      );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">

        <div className="flex justify-between items-center">

          <h2 className="text-xl font-semibold">
            {product.name}
          </h2>

          <FiHeart
            className="text-red-500"
            size={22}
          />

        </div>

        <p className="text-gray-500 mt-2">
          {product.description}
        </p>

        <h3 className="text-2xl font-bold text-blue-600 mt-4">
          ₹{Number(product.price).toLocaleString()}
        </h3>

        <div className="flex gap-3 mt-6">

          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex justify-center items-center gap-2"
          >
            <FiShoppingCart />
            Add to Cart
          </button>

          <button
            onClick={handleRemove}
            className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-lg"
          >
            <FiTrash2 />
          </button>

        </div>

      </div>

    </div>
  );
};

export default WishlistCard;