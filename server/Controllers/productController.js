import pool from "../config/database.js";

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM products ORDER BY id ASC"
    );

    res.status(200).json({
      success: true,
      count: result.rows.length,
      products: result.rows,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get product by ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      brand,
      price,
      stock,
      image,
      rating,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO products
      (name, description, category, brand, price, stock, image, rating)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING *`,
      [
        name,
        description,
        category,
        brand,
        price,
        stock,
        image,
        rating,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Product Added Successfully",
      product: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      description,
      category,
      brand,
      price,
      stock,
      image,
      rating,
    } = req.body;

    const result = await pool.query(
      `UPDATE products
       SET
       name=$1,
       description=$2,
       category=$3,
       brand=$4,
       price=$5,
       stock=$6,
       image=$7,
       rating=$8
       WHERE id=$9
       RETURNING *`,
      [
        name,
        description,
        category,
        brand,
        price,
        stock,
        image,
        rating,
        id,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product Updated Successfully",
      product: result.rows[0],
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM products WHERE id=$1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product Deleted Successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};