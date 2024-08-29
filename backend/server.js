const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const { logger } = require("./middlewares/logger");
const userRoutes = require("./routes/user-route");

const PORT = process.env.PORT;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/users", userRoutes);

app.get("/user", (req, res) => {
  console.log("all user is read successfully");
  res.json({ message: "GET success" });
});

app.post("/user", (req, res) => {
  console.log("New user is created successfully");
});

app.put("/user", (req, res) => {
  console.log("user is updated successfully");
});

app.delete("/user", (req, res) => {
  console.log("user is deleted successfully");
});

app.listen(PORT, () => {
  console.log(`Сервер Localhost:${PORT}дээр аслаа`);
});
