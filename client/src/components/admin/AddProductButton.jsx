import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

const AddProductButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end mb-6">

      <button
        onClick={() => navigate("/admin/add-product")}
        className="
          flex
          items-center
          gap-2
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6
          py-3
          rounded-lg
          font-semibold
          shadow-md
          hover:shadow-lg
          transition
        "
      >
        <FiPlus size={20} />
        Add Product
      </button>

    </div>
  );
};

export default AddProductButton;