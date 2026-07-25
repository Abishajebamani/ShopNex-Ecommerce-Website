const ProductFilter = () => {
  return (
    <select className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option>All Categories</option>
      <option>Electronics</option>
      <option>Mobiles</option>
      <option>Fashion</option>
      <option>Watches</option>
      <option>Accessories</option>
    </select>
  );
};

export default ProductFilter;