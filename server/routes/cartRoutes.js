import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
} from "../controllers/cartController.js";

const router = express.Router();

// Protected Cart Routes
router.post("/", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);
router.put("/:id", authMiddleware, updateCart);
router.delete("/:id", authMiddleware, removeFromCart);

export default router;