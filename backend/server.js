const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const { logger } = require("./middlewares/logger");
const userRoutes = require("./routes/user-route");
const authRoutes = require("./routes/auth-route");
const categoriesRoutes = require("./routes/categories-route");
const recordsRoutes = require("./routes/records-route");

const PORT = process.env.PORT;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoriesRoutes);
app.use("/records", recordsRoutes);

app.get("/", (_, res) => {
  res.send("Welcome Expense Tracker API");
});

app.listen(PORT, () => {
  console.log(`Сервер Localhost:${PORT} дээр аслаа`);
});
