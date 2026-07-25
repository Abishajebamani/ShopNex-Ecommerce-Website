import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Layout from "../../components/layout/Layout";
import { FiUser, FiMail, FiPhone, FiLogOut } from "react-icons/fi";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Header */}
          <div className="bg-blue-600 text-white p-8 flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-white text-blue-600 flex items-center justify-center">
              <FiUser size={40} />
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                {user?.name || "Guest User"}
              </h2>

              <p className="text-blue-100">
                Welcome to ShopNex
              </p>
            </div>
          </div>

          {/* User Information */}
          <div className="p-8 space-y-6">

            <div className="flex items-center gap-4">
              <FiMail className="text-blue-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-medium">
                  {user?.email || "Not Available"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FiPhone className="text-blue-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <p className="font-medium">
                  {user?.phone || "Not Available"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FiUser className="text-blue-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">
                  Role
                </p>

                <p className="font-medium capitalize">
                  {user?.role || "User"}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">

              <button
                onClick={() => navigate("/orders")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
              >
                My Orders
              </button>

              <button
                onClick={() => navigate("/wishlist")}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition"
              >
                Wishlist
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition"
              >
                <FiLogOut />
                Logout
              </button>

            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;