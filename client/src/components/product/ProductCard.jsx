import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

import { useWishlist } from "../../context/WishlistContext";
import API from "../../services/api";

import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductCard = ({ product }) => {
  const { wishlist, fetchWishlist } = useWishlist();

  // Check if the product is already in the wishlist
  const isWishlisted = wishlist.some(
    (item) => item.product_id === product.id
  );

  const handleWishlist = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (isWishlisted) {
        // Find the wishlist item
        const wishItem = wishlist.find(
          (item) => item.product_id === product.id
        );

        await API.delete(`/wishlist/${wishItem.wishlist_id}`);
      } else {
        await API.post("/wishlist", {
          product_id: product.id,
        });
      }

      // Refresh wishlist after add/remove
      await fetchWishlist();

    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
        "Wishlist operation failed."
      );
    }
  };

  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        overflow-hidden
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        flex
        flex-col
        h-full
      "
    >
      <Link
        to={`/products/${product.id}`}
        className="block"
      >
        <div className="relative">

          {/* Best Seller Badge */}
          <span
            className="
              absolute
              top-3
              left-3
              bg-red-500
              text-white
              text-xs
              font-semibold
              px-3
              py-1
              rounded-full
              z-20
            "
          >
            BEST SELLER
          </span>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className="
              absolute
              top-3
              right-3
              bg-white
              p-2
              rounded-full
              shadow-md
              hover:bg-red-50
              transition
              z-20
            "
          >
            <Heart
              size={20}
              className={`transition ${
                isWishlisted
                  ? "fill-red-500 text-red-500"
                  : "text-gray-500 hover:text-red-500"
              }`}
            />
          </button>

          {/* Product Image */}
          <ProductImage
            image={product.image}
            name={product.name}
          />

        </div>

        {/* Product Information */}
        <ProductInfo product={product} />

      </Link>
    </div>
  );
};

export default ProductCard;