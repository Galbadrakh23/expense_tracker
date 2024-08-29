const { Router } = require("express");
const { getAllCategories } = require("../controllers/categories-controller");

const router = Router();

router.route("/").get(getAllCategories);

module.exports = router;
