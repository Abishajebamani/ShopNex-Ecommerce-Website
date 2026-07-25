import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import API from "../../services/api";

const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await API.post("/products", product);

      if (response.data.success) {
        alert("Product added successfully!");
        navigate("/admin/products");
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      <div className="w-72">
        <Sidebar />
      </div>

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Add Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={product.brand}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="5"
            value={product.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Adding Product..." : "Add Product"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddProduct;