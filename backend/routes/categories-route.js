const { Router } = require("express");
const {
  getAllCategories,
  createCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/categories-controller");

const router = Router();

router.route("/").get(getAllCategories);
router.route("/").post(createCategories);
router.route("/:id").put(updateCategories);
router.route("/:id").delete(deleteCategories);

module.exports = router;
