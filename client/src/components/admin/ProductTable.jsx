import { useEffect, useState } from "react";
import API from "../../services/api";
import ProductRow from "./ProductRow";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/products");

      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">

      {loading ? (
        <div className="p-8 text-center">
          Loading Products...
        </div>
      ) : (
        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                refreshProducts={fetchProducts}
              />
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
};

export default ProductTable;