const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const { logger } = require("./middlewares/logger");
const userRoutes = require("./routes/user-route");
const categoriesRoutes = require("./routes/categories-route");

const PORT = process.env.PORT;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/users", userRoutes);
app.use("/categories", categoriesRoutes);

app.listen(PORT, () => {
  console.log(`Сервер Localhost:${PORT} дээр аслаа`);
});
