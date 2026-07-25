import { useNavigate } from "react-router-dom";
import API from "../../services/api";

const ProductRow = ({ product, refreshProducts }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${product.name}"?`
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await API.delete(`/products/${product.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Product deleted successfully!");

      // Refresh table
      refreshProducts();

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to delete product"
      );
    }
  };

  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="p-4 font-medium">
        {product.name}
      </td>

      <td className="p-4">
        {product.category}
      </td>

      <td className="p-4">
        ₹{Number(product.price).toLocaleString()}
      </td>

      <td className="p-4">
        {product.stock}
      </td>

      <td className="p-4 space-x-3">

        <button
          onClick={() =>
            navigate(`/admin/edit-product/${product.id}`)
          }
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-800 font-semibold"
        >
          Delete
        </button>

      </td>

    </tr>
  );
};

export default ProductRow;