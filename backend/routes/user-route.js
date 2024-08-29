const { Router } = require("express");
const { getAllUser, deleteUser } = require("../controllers/user-controller");

const router = Router();

router.route("/").get(getAllUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
