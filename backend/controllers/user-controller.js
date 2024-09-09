const sql = require("../config/db");

const getCurrentUser = async (req, res) => {
  const { id } = req.user;
  const [data] = await sql`SELECT * FROM users WHERE id=${id}`;

  res.status(200).json({ message: "success", user: data });
};

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("DATA", data);
  res.status(200).json({ message: "Амжилттай", user: data });
};
const createUser = async (req, res) => {
  const { email, name, password, profile_img } = req.body;

  try {
    const data = await sql`
      INSERT INTO users (email, name, password, profile_img )
      VALUES ( ${email}, ${name}, ${password}, ${profile_img} )
      RETURNING *;
    `;
    res.status(201).json({ message: "Create success", user: data[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Create failed", error });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, name, password } = req.body;
  const data = await sql`
    UPDATE users
    SET email = ${email}, name = ${name}, password = ${password}
    WHERE id = ${id}
    RETURNING *;
  `;
  console.log("DATA", data);
  res.status(200).json({ message: "Update success", user: data[0] });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM users WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Delete success", user: data });
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getCurrentUser,
};
