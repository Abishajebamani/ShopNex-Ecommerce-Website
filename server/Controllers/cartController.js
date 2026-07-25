import pool from "../config/database.js";

// Add product to cart
export const addToCart = async (req, res) => {
  console.log("Decoded User:", req.user);
  console.log("Request Body:", req.body);
  try {
    const user_id = req.user.id;
    const { product_id, quantity } = req.body;

    if ( !product_id) {
      return res.status(400).json({
        success: false,
        message: "User ID and Product ID are required",
      });
    }

    // Check if the product is already in the cart
    const existing = await pool.query(
      "SELECT * FROM cart WHERE user_id=$1 AND product_id=$2",
      [user_id, product_id]
    );

    if (existing.rows.length > 0) {
      const updated = await pool.query(
        `UPDATE cart
         SET quantity = quantity + $1
         WHERE user_id=$2 AND product_id=$3
         RETURNING *`,
        [quantity || 1, user_id, product_id]
      );

      return res.json({
        success: true,
        message: "Cart updated successfully",
        cart: updated.rows[0],
      });
    }

    const result = await pool.query(
      `INSERT INTO cart(user_id, product_id, quantity)
       VALUES($1,$2,$3)
       RETURNING *`,
      [user_id, product_id, quantity || 1]
    );

    res.status(201).json({
      success: true,
      message: "Product added to cart",
      cart: result.rows[0],
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get cart items
// Get cart items
export const getCart = async (req, res) => {
  try {
    const user_id = req.user.id;

    const result = await pool.query(
      `SELECT
        cart.id,
        cart.quantity,
        products.id AS product_id,
        products.name,
        products.price,
        products.image
      FROM cart
      INNER JOIN products
      ON cart.product_id = products.id
      WHERE cart.user_id = $1`,
      [user_id]
    );

    res.status(200).json({
      success: true,
      cart: result.rows,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Update quantity
export const updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const result = await pool.query(
      `UPDATE cart
       SET quantity=$1
       WHERE id=$2
       RETURNING *`,
      [quantity, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    res.json({
      success: true,
      message: "Cart updated",
      cart: result.rows[0],
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Remove item
export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM cart WHERE id=$1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    res.json({
      success: true,
      message: "Item removed from cart",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};