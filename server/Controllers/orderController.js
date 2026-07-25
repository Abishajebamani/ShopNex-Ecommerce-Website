import pool from "../config/database.js";

export const placeOrder = async (req, res) => {
  const client = await pool.connect();

  try {
    const user_id = req.user.id;
    const { shipping_address, payment_method } = req.body;

    if (!shipping_address || !payment_method) {
      return res.status(400).json({
        success: false,
        message: "Shipping address and payment method are required",
      });
    }

    await client.query("BEGIN");

    // Get Cart Items
    const cartResult = await client.query(
      `SELECT
          cart.product_id,
          cart.quantity,
          products.price
       FROM cart
       JOIN products
       ON cart.product_id = products.id
       WHERE cart.user_id = $1`,
      [user_id]
    );

    if (cartResult.rows.length === 0) {
      await client.query("ROLLBACK");

      return res.status(400).json({
        success: false,
        message: "Your cart is empty",
      });
    }

    // Calculate Total
    let totalAmount = 0;

    cartResult.rows.forEach((item) => {
      totalAmount += Number(item.price) * item.quantity;
    });

    // Create Order
    const orderResult = await client.query(
      `INSERT INTO orders
      (user_id,total_amount,shipping_address,payment_method)
      VALUES($1,$2,$3,$4)
      RETURNING *`,
      [
        user_id,
        totalAmount,
        shipping_address,
        payment_method,
      ]
    );

    const order = orderResult.rows[0];

    // Insert Order Items
    for (const item of cartResult.rows) {
      await client.query(
        `INSERT INTO order_items
        (order_id,product_id,quantity,price)
        VALUES($1,$2,$3,$4)`,
        [
          order.id,
          item.product_id,
          item.quantity,
          item.price,
        ]
      );
    }

    // Clear Cart
    await client.query(
      "DELETE FROM cart WHERE user_id=$1",
      [user_id]
    );

    await client.query("COMMIT");

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });

  } catch (error) {
    await client.query("ROLLBACK");

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  } finally {
    client.release();
  }
};

export const getOrders = async (req, res) => {
  try {
    const user_id = req.user.id;

    const result = await pool.query(
      `SELECT *
       FROM orders
       WHERE user_id=$1
       ORDER BY created_at DESC`,
      [user_id]
    );

    res.json({
      success: true,
      orders: result.rows,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        orders.*,
        users.name,
        users.email
      FROM orders
      JOIN users
      ON orders.user_id = users.id
      ORDER BY orders.created_at DESC
    `);

    res.json({
      success: true,
      orders: result.rows,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await pool.query(
      `UPDATE orders
       SET status = $1
       WHERE id = $2
       RETURNING *`,
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.json({
      success: true,
      message: "Order status updated successfully",
      order: result.rows[0],
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};