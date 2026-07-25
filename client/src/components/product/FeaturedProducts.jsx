import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    stock: 20,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Watches",
    price: 3999,
    stock:100,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Fashion",
    price: 2999,
    stock: 60,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 4,
    name: "Laptop",
    category: "Electronics",
    price: 65999,
    stock: 95,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-800">
          Featured Products
        </h2>

        <p className="text-gray-500 mt-3">
          Discover our most popular products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;