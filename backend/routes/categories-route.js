const { Router } = require("express");
const {
  getAllCategories,
  createCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/categories-controller");
const { auth } = require("../middlewares/auth");

const router = Router();

router.route("/").get(auth, getAllCategories);
router.route("/").post(auth, createCategories);

router.route("/:id").put(updateCategories);
router.route("/:id").delete(deleteCategories);

module.exports = router;
