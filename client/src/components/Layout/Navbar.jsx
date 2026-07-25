import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FiShoppingCart,
  FiMenu,
  FiX,
  FiHeart,
  FiUser,
} from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { isAuthenticated, logout } = useAuth();
  const { cartCount } = useCart();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold text-blue-600"
          >
            ShopNex
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>

            <NavLink to="/wishlist" className={navLinkClass}>
              Wishlist
            </NavLink>

            <NavLink to="/orders" className={navLinkClass}>
              Orders
            </NavLink>

            {isAuthenticated ? (
              <>
                <NavLink to="/profile" className={navLinkClass}>
                  Profile
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-600 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={navLinkClass}>
                  Login
                </NavLink>

                <NavLink to="/register" className={navLinkClass}>
                  Register
                </NavLink>
              </>
            )}

          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-5">

            <Link to="/wishlist">
              <FiHeart
                size={22}
                className="text-gray-700 hover:text-red-500 transition"
              />
            </Link>

            <Link
              to="/cart"
              className="relative"
            >
              <FiShoppingCart
                size={22}
                className="text-gray-700 hover:text-blue-600 transition"
              />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {isAuthenticated && (
              <Link to="/profile">
                <FiUser
                  size={22}
                  className="text-gray-700 hover:text-blue-600 transition"
                />
              </Link>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col p-5 space-y-5">

            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>

            <NavLink
              to="/wishlist"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Wishlist
            </NavLink>

            <NavLink
              to="/cart"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Cart {cartCount > 0 && `(${cartCount})`}
            </NavLink>

            <NavLink
              to="/orders"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Orders
            </NavLink>

            {isAuthenticated ? (
              <>
                <NavLink
                  to="/profile"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </NavLink>

                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="text-left text-red-500 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </NavLink>
              </>
            )}

          </div>

        </div>
      )}
    </nav>
  );
};
export default Navbar;