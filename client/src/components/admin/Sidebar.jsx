import { NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiPlus,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 h-screen sticky top-0">

      <h2 className="text-3xl font-bold text-blue-600 mb-8">
        ShopNex Admin
      </h2>

      <nav className="space-y-2">

        <NavLink to="/admin" end className={linkClass}>
          <FiHome size={20} />
          Dashboard
        </NavLink>

        <NavLink to="/admin/products" className={linkClass}>
          <FiBox size={20} />
          Products
        </NavLink>

        <NavLink to="/admin/add-product" className={linkClass}>
          <FiPlus size={20} />
          Add Product
        </NavLink>

        <NavLink to="/admin/orders" className={linkClass}>
          <FiShoppingCart size={20} />
          Orders
        </NavLink>

        <NavLink to="/admin/users" className={linkClass}>
          <FiUsers size={20} />
          Users
        </NavLink>

      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 mt-10 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 w-full transition"
      >
        <FiLogOut size={20} />
        Logout
      </button>

    </div>
  );
};

export default Sidebar;