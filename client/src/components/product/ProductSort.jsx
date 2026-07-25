const ProductSort = () => {
  return (
    <select className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option>Sort By</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
      <option>Highest Rated</option>
      <option>Newest</option>
    </select>
  );
};

export default ProductSort;