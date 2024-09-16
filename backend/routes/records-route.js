const { Router } = require("express");
const {
  getAllRecords,
  createRecords,
  updateRecords,
  deleteRecords,
  getTransaction,
  getAllChart,
  getBarChart,
  getRecords,
  getRecordsDefault,
} = require("../controllers/records-controller");

const router = Router();

router.route("/bar").get(getBarChart);
router.route("/transaction").get(getTransaction);
router.route("/default").get(getRecords);
router.route("/information").get(getRecordsDefault);
router.route("/chart").get(getAllChart);
router.route("/").get(getAllRecords);

router.route("/").post(createRecords);
router.route("/:id").put(updateRecords);
router.route("/:id").delete(deleteRecords);

module.exports = router;
