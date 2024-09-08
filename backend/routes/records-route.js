const { Router } = require("express");
const {
  getAllRecords,
  createRecords,
  updateRecords,
  deleteRecords,
  getinfo,
} = require("../controllers/records-controller");

const router = Router();

router.route("/info").get(getinfo);
router.route("/").get(getAllRecords);

router.route("/").post(createRecords);
router.route("/:id").put(updateRecords);
router.route("/:id").delete(deleteRecords);

module.exports = router;
