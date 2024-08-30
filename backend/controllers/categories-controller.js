const sql = require("../config/db");

const getAllCategories = async (req, res) => {
  const data = await sql`SELECT * FROM categories`;
  console.log("DATA", data);
  res.status(200).json({ message: "success", categories: data });
};

const createCategories = async (req, res) => {
  const { name, description } = req.body;
  const data = await sql`
    INSERT INTO categories (name, description)
    VALUES (${name}, ${description})
    RETURNING *
  `;
  console.log("DATA", data);
  res.status(201).json({ message: "Created", category: data[0] });
};

const updateCategories = () => {};

const deleteCategories = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM categories WHERE eid=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Delete success", categories: data });
};

module.exports = {
  getAllCategories,
  createCategories,
  updateCategories,
  deleteCategories,
};
