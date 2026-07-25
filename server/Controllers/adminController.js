import pool from "../config/database.js";

export const getDashboardStats = async (req, res) => {
  try {
    // Total Products
    const products = await pool.query(
      "SELECT COUNT(*) FROM products"
    );

    // Total Users
    const users = await pool.query(
      "SELECT COUNT(*) FROM users"
    );

    // Total Orders
    const orders = await pool.query(
      "SELECT COUNT(*) FROM orders"
    );

    // Total Revenue
    const revenue = await pool.query(`
      SELECT COALESCE(SUM(total_amount),0) AS revenue
      FROM orders
      
    `);

    res.json({
      success: true,
      stats: {
        products: Number(products.rows[0].count),
        users: Number(users.rows[0].count),
        orders: Number(orders.rows[0].count),
        revenue: Number(revenue.rows[0].revenue),
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        name,
        email,
        phone,
        role,
        created_at
      FROM users
      ORDER BY created_at DESC
    `);

    res.json({
      success: true,
      users: result.rows,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `DELETE FROM users
       WHERE id = $1
       RETURNING *`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};