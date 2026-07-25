import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  placeOrder,
  getOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", authMiddleware, placeOrder);

router.get("/", authMiddleware, getOrders);

router.get("/admin", authMiddleware, getAllOrders);

router.put(
  "/admin/:id",
  authMiddleware,
  updateOrderStatus
);

export default router;