const { Router } = require("express");
const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user-controller");

const router = Router();

router.route("/").get(getAllUser);
router.route("/").post(createUser);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
