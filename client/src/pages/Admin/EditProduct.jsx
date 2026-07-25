import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await API.get(`/products/${id}`);

      if (response.data.success) {
        setFormData(response.data.product);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to load product");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await API.put(`/products/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Product updated successfully!");

      navigate("/admin/products");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to update product"
      );
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-20 text-2xl">
          Loading...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-10">

        <h1 className="text-3xl font-bold mb-8">
          Edit Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-8 space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="description"
            rows="5"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            Update Product
          </button>

        </form>

      </div>
    </Layout>
  );
};

export default EditProduct;