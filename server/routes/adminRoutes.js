import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  getDashboardStats,
  getAllUsers,
  deleteUser,
} from "../controllers/adminController.js";

import {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// ==========================
// Dashboard
// ==========================
router.get(
  "/dashboard",
  authMiddleware,
  getDashboardStats
);

// ==========================
// Products
// ==========================
router.get(
  "/products",
  authMiddleware,
  getAllProducts
);

router.post(
  "/products",
  authMiddleware,
  addProduct
);

router.put(
  "/products/:id",
  authMiddleware,
  updateProduct
);

router.delete(
  "/products/:id",
  authMiddleware,
  deleteProduct
);

// ==========================
// Users
// ==========================
router.get(
  "/users",
  authMiddleware,
  getAllUsers
);

router.delete(
  "/users/:id",
  authMiddleware,
  deleteUser
);

export default router;