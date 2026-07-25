import { FiSearch } from "react-icons/fi";

const ProductSearch = () => {
  return (
    <div className="relative w-full md:w-96">
      <FiSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        size={20}
      />

      <input
        type="text"
        placeholder="Search products..."
        className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default ProductSearch;