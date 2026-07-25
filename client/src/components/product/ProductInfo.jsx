import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const ProductInfo = ({ product }) => {
  const navigate = useNavigate();
  const { fetchCartCount } = useCart();

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    console.log("Token:", token);
    console.log("Product:", product);
    console.log("Product ID:", product.id);

    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product_id:product.id,
          quantity: 1,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add product to cart");
      }

      await fetchCartCount();
      alert("Product added to cart successfully!");
      navigate("/cart");
   } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-5 flex flex-col flex-grow">

      {/* Category */}
      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
        {product.category}
      </span>

      {/* Product Name */}
      <h3 className="mt-2 text-lg font-bold text-gray-800 min-h-[56px] line-clamp-2">
        {product.name}
      </h3>

      {/* Brand */}
      <p className="text-gray-500 text-sm mt-1">
        Brand: <span className="font-medium">{product.brand}</span>
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-3">
        <FaStar className="text-yellow-500" />

        <span className="font-medium text-gray-700">
          {product.rating}
        </span>

        <span className="text-gray-400 text-sm">
          (152 Reviews)
        </span>
      </div>

      {/* Price */}
      <div className="mt-4">
        <h2 className="text-3xl font-bold text-green-600">
          ₹{Number(product.price).toLocaleString()}
        </h2>
      </div>

      {/* Stock */}
      <p
        className={`mt-2 font-medium ${
          product.stock > 0
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {product.stock > 0
          ? `In Stock (${product.stock})`
          : "Out of Stock"}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={product.stock === 0}
        className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
          product.stock > 0
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
      </button>

    </div>
  );
};

export default ProductInfo;