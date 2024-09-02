const sql = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const { email, name, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const data = await sql`
      INSERT INTO users(email, name, password, profile_img )
      VALUES (${email}, ${name}, ${hashedPassword}, 'url');
    `;
    res
      .status(201)
      .json({ message: "New user registered successfully", user: data[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Create failed", error });
  }
};

const signIn = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  const [user] = await sql`
    SELECT * FROM users WHERE email = ${email}
  `;
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  } else {
    const isCheck = bcrypt.compareSync(password, user.password);
    if (!isCheck) {
      res.status(400).json({ message: "Password incorrect" });
    } else {
      const token = jwt.sign({ id: user.id }, "JWT_SECRET", {
        expiresIn: "24h",
      });

      res.status(200).json({ message: "Login success", token });
    }
  }
};

module.exports = { signUp, signIn };
