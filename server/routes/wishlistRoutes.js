import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../controllers/wishlistController.js";

const router = express.Router();

// Add product to wishlist
router.post("/", authMiddleware, addToWishlist);

// Get logged-in user's wishlist
router.get("/", authMiddleware, getWishlist);

// Remove product from wishlist
router.delete("/:id", authMiddleware, removeFromWishlist);

export default router;