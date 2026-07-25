import { useEffect, useState } from "react";

import Layout from "../../components/layout/Layout";
import SearchBar from "../../components/ui/SearchBar";
import FilterSidebar from "../../components/ui/FilterSidebar";
import ProductGrid from "../../components/product/ProductGrid";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [minimumRating, setMinimumRating] = useState(0);
  // Fetch Products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/products"
      );

      const data = await response.json();

      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter Products
  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesBrand =
      selectedBrand === "All" ||
      product.brand === selectedBrand;

    const matchesPrice =
      Number(product.price) <= maxPrice;
    
    const matchesRating =
     Number(product.rating) >= minimumRating;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand &&
      matchesPrice &&
      matchesRating
    );
  });

  // Sort Products
  const sortedProducts = [...filteredProducts];

  switch (sortBy) {
    case "low-high":
      sortedProducts.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
      break;

    case "high-low":
      sortedProducts.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      break;

    case "rating":
      sortedProducts.sort(
        (a, b) => Number(b.rating) - Number(a.rating)
      );
      break;

    default:
      break;
  }

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          All Products
        </h1>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-blue-600">
              {sortedProducts.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold">
              {products.length}
            </span>{" "}
            Products
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">
              Default
            </option>

            <option value="low-high">
              Price: Low to High
            </option>

            <option value="high-low">
              Price: High to Low
            </option>

            <option value="rating">
              Highest Rated
            </option>
          </select>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          <aside>
            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              minimumRating={minimumRating}
              setMinimumRating={setMinimumRating}
            />
          </aside>

          <div className="lg:col-span-3">

            {loading ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-semibold">
                  Loading Products...
                </h2>
              </div>
            ) : sortedProducts.length > 0 ? (
              <ProductGrid products={sortedProducts} />
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">

                <h2 className="text-2xl font-bold text-gray-700">
                  No Products Found
                </h2>

                <p className="text-gray-500 mt-3">
                  Try another search keyword or choose a different category.
                </p>

              </div>
            )}

          </div>

        </div>

      </section>
    </Layout>
  );
};

export default Products;