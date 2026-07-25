import { FiHeart } from "react-icons/fi";

const EmptyWishlist = () => {
  return (
    <div className="text-center py-20">

      <FiHeart
        className="mx-auto text-gray-400"
        size={70}
      />

      <h2 className="text-3xl font-bold mt-6">
        Your Wishlist is Empty
      </h2>

      <p className="text-gray-500 mt-3">
        Save your favourite products here.
      </p>

      <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
        Continue Shopping
      </button>

    </div>
  );
};

export default EmptyWishlist;