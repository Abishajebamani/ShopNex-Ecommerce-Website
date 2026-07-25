import pool from "../config/database.js";

// ==========================
// Add to Wishlist
// ==========================
export const addToWishlist = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { product_id } = req.body;

    if (!product_id) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    // Check if already exists
    const exists = await pool.query(
      `SELECT * FROM wishlist
       WHERE user_id = $1 AND product_id = $2`,
      [user_id, product_id]
    );

    if (exists.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Product already in wishlist",
      });
    }

    await pool.query(
      `INSERT INTO wishlist (user_id, product_id)
       VALUES ($1, $2)`,
      [user_id, product_id]
    );

    res.status(201).json({
      success: true,
      message: "Product added to wishlist",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Get Wishlist
// ==========================
export const getWishlist = async (req, res) => {
  try {
    const user_id = req.user.id;

    const result = await pool.query(
      `SELECT
          wishlist.id AS wishlist_id,
          products.id AS product_id,
          products.name,
          products.description,
          products.price,
          products.category,
          products.brand,
          products.stock,
          products.image,
          products.rating
       FROM wishlist
       JOIN products
       ON wishlist.product_id = products.id
       WHERE wishlist.user_id = $1
       ORDER BY wishlist.created_at DESC`,
      [user_id]
    );

    res.json({
      success: true,
      wishlist: result.rows,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Remove from Wishlist
// ==========================
export const removeFromWishlist = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { id } = req.params;

    const result = await pool.query(
      `DELETE FROM wishlist
       WHERE id = $1
       AND user_id = $2
       RETURNING *`,
      [id, user_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Wishlist item not found",
      });
    }

    res.json({
      success: true,
      message: "Removed from wishlist",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};