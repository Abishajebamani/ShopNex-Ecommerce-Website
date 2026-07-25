import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${id}`
      );

      const data = await response.json();

      if (data.success) {
        setProduct(data.product);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto py-20 text-center">
          <h2 className="text-3xl font-bold">
            Loading Product...
          </h2>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto py-20 text-center">
          <h2 className="text-3xl font-bold">
            Product Not Found
          </h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-12">

          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg"
          />

          <div>

            <p className="text-blue-600 font-medium">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold mt-3">
              {product.name}
            </h1>

            <p className="text-gray-500 mt-2">
              Brand : {product.brand}
            </p>

            <p className="text-yellow-500 mt-4">
              ⭐ {product.rating}
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-4">
              ₹{product.price}
            </h2>

            <p className="mt-6 text-gray-600">
              {product.description}
            </p>

            <p className="mt-5 font-semibold">
              Stock : {product.stock}
            </p>

            <div className="flex gap-4 mt-8">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                Add to Cart
              </button>

              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </section>
    </Layout>
  );
};

export default ProductDetails;