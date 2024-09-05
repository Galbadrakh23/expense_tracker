const sql = require("../config/db");

const getAllRecords = async (req, res) => {
  const data = await sql`SELECT * FROM records`;
  console.log("DATA", data);
  res.status(200).json({ message: "Амжилттай", user: data });
};

const createRecords = async (req, res) => {
  const { email, name, password, profile_img } = req.body;

  try {
    const data = await sql`
      INSERT INTO records (email, name, password, profile_img )
      VALUES ( ${email}, ${name}, ${password}, ${profile_img} )
      RETURNING *;
    `;
    res.status(201).json({ message: "Create success", user: data[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Create failed", error });
  }
};

const updateRecords = async (req, res) => {
  const { id } = req.params;
  const { email, name, password } = req.body;
  const data = await sql`
    UPDATE records
    SET email = ${email}, name = ${name}, password = ${password}
    WHERE id = ${id}
    RETURNING *;
  `;
  console.log("DATA", data);
  res.status(200).json({ message: "Update success", user: data[0] });
};
const deleteRecords = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM records WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Delete success", user: data });
};

module.exports = { getAllRecords, createRecords, updateRecords, deleteRecords };
