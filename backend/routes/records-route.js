const { Router } = require("express");
const {
  getAllRecords,
  createRecords,
  updateRecords,
  deleteRecords,
} = require("../controllers/records-controller");

const router = Router();

router.route("/").get(getAllRecords);
router.route("/").post(createRecords);
router.route("/:id").put(updateRecords);
router.route("/:id").delete(deleteRecords);

module.exports = router;
