const { Router } = require("express");
const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getCurrentUser,
} = require("../controllers/user-controller");

const router = Router();
const { auth } = require("../middlewares/auth");

router.route("/profile").get(auth, getCurrentUser);
router.route("/").get(getAllUser);
router.route("/").post(createUser);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
