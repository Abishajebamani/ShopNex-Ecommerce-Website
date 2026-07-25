const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
   maxPrice,
  setMaxPrice,
  minimumRating,
  setMinimumRating,
}) => {
  const categories = [
    "All",
    "Electronics",
    "Mobiles",
    "Fashion",
    "Accessories",
    "Watches",
  ];

  const brands = [
    "All",
    "Apple",
    "Samsung",
    "Dell",
    "HP",
    "Nike",
    "Adidas",
    "Sony",
    "Boat",
  ];

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedBrand("All");
    setMaxPrice(100000);
    setMinimumRating(0);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

      <h2 className="text-2xl font-bold mb-6">
        Filters
      </h2>

      {/* Category */}

      <div className="mb-8">

        <h3 className="text-lg font-semibold mb-3">
          Category
        </h3>

        <div className="space-y-3">

          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition"
            >
              <input
                type="radio"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
              />

              {category}

            </label>
          ))}

        </div>

      </div>

      {/* Brand */}

      <div className="mb-8">

        <h3 className="text-lg font-semibold mb-3">
          Brand
        </h3>

        <div className="space-y-3">

          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition"
            >
              <input
                type="radio"
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
              />

              {brand}

            </label>
          ))}

        </div>

      </div>

      {/* Price Filter */}

      <div className="mb-8">

      <h3 className="text-lg font-semibold mb-3">
         Maximum Price
      </h3>

    <input
    type="range"
    min="1000"
    max="100000"
    step="1000"
    value={maxPrice}
    onChange={(e) =>
      setMaxPrice(Number(e.target.value))
    }
    className="w-full"
  />

  <p className="mt-2 text-blue-600 font-semibold">
    ₹{maxPrice.toLocaleString()}
  </p>

</div>

    {/* Rating Filter */}

<div className="mb-8">

  <h3 className="text-lg font-semibold mb-3">
    Rating
  </h3>

  <select
    value={minimumRating}
    onChange={(e) =>
      setMinimumRating(Number(e.target.value))
    }
    className="w-full border rounded-lg p-2"
  >
    <option value={0}>All Ratings</option>
    <option value={4}>4 ★ & Above</option>
    <option value={3}>3 ★ & Above</option>
    <option value={2}>2 ★ & Above</option>
    <option value={1}>1 ★ & Above</option>
  </select>

</div>

      {/* Clear */}

      <button
        onClick={clearFilters}
        className="w-full py-3 rounded-lg bg-gray-100 hover:bg-gray-200 font-medium transition"
      >
        Clear Filters
      </button>

    </div>
  );
};

export default FilterSidebar;