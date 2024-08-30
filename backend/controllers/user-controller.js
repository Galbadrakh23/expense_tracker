const sql = require("../config/db");

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("DATA", data);
  res.status(200).json({ message: "Амжилттай", user: data });
};
const createUser = async (req, res) => {
  const { name, password, profile_img, createdat } = req.body;

  try {
    const data = await sql`
      INSERT INTO users (name, password, profile_img, createdat)
      VALUES (${name}, ${password}, ${profile_img}, ${createdat})
      RETURNING *
    `;
    res.status(201).json({ message: "Create success", user: data[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Create failed", error });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, email, position } = req.body;
  const data = await sql`
    UPDATE users
    SET firstname = ${firstname}, lastname = ${lastname}, email = ${email}, position = ${position}
    WHERE eid = ${id}
    RETURNING *
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

module.exports = { getAllUser, createUser, updateUser, deleteUser };
