const sql = require("../config/db");

const getAllCategories = async (req, res) => {
  const data = await sql`SELECT * FROM categories`;
  console.log("DATA", data);
  res.status(200).json({ message: "success", categories: data });
};

const createCategories = async (req, res) => {
  const data = await sql`SELECT *FROM categories`;
  console.log("DATA", data);
  res.status(200).json({ message: "success", user: data });
};

const updateCategories = () => {};

const deleteCategories = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM categories WHERE eid=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Delete success", user: data });
};

module.exports = {
  getAllCategories,
  createCategories,
  updateCategories,
  deleteCategories,
};
