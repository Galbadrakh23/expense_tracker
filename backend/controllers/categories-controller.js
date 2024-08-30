const sql = require("../config/db");

const getAllCategories = async (req, res) => {
  const data = await sql`SELECT * FROM categories`;
  console.log("DATA", data);
  res.status(200).json({ message: "success", categories: data });
};
const createCategories = async (req, res) => {
  const { name, description } = req.body;
  try {
    const data = await sql`
    INSERT INTO categories (name, description)
    VALUES (${name}, ${description})
    RETURNING *;
  `;
    console.log("DATA", data);
    res.status(201).json({ message: "Created", categories: data[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Create failed", error });
  }
};
const updateCategories = async (req, res) => {
  const { name, description } = req.body;
  const data = await sql`
  UPDATE categories
  SET name =${name}, description =${description}
  WHERE id = ${id}
  RETURNING *;
  `;
  console.log("DATA", data);
  res.status(200).json({ message: "Update success", categories: data[0] });
};
const deleteCategories = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM categories WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Delete success", categories: data });
};

module.exports = {
  getAllCategories,
  createCategories,
  updateCategories,
  deleteCategories,
};
