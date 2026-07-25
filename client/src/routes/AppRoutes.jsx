import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import UserOrders from "../pages/orders/Orders";
import Wishlist from "../pages/Wishlist/Wishlist";
import Profile from "../pages/Profile/Profile";

import Dashboard from "../pages/Admin/Dashboard";
import AdminProducts from "../pages/Admin/Products";
import AddProduct from "../pages/Admin/AddProduct";
import EditProduct from "../pages/Admin/EditProduct";
import AdminOrders from "../pages/Admin/Orders";
import Users from "../pages/Admin/Users";

import NotFound from "../pages/NotFound/NotFound";

import ProtectedRoute from "../protected/ProtectedRoute";
import AdminRoute from "../protected/AdminRoute";

const AppRoutes = () => {
  return (
    <Routes>

      {/* =========================
          Public Routes
      ========================== */}

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/products" element={<Products />} />

      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />

      {/* =========================
          User Protected Routes
      ========================== */}

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <UserOrders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* =========================
          Admin Routes
      ========================== */}

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <AdminRoute>
            <AdminProducts />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/add-product"
        element={
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/edit-product/:id"
        element={
          <AdminRoute>
            <EditProduct />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <AdminRoute>
            <AdminOrders />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <AdminRoute>
            <Users />
          </AdminRoute>
        }
      />

      {/* =========================
          404 Page
      ========================== */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
};

export default AppRoutes;