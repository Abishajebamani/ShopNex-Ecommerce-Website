import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full mb-4">
      <div className="relative">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
          w-full
          border
          border-gray-300
          rounded-xl
          py-4
          pl-12
          pr-4
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          "
        />

      </div>
    </div>
  );
};

export default SearchBar;