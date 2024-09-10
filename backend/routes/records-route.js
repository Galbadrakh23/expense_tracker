const { Router } = require("express");
const {
  getAllRecords,
  createRecords,
  updateRecords,
  deleteRecords,
  getinfo,
  getAllChart,
  getBarChart,
} = require("../controllers/records-controller");

const router = Router();

router.route("/bar").get(getBarChart);
router.route("/info").get(getinfo);
router.route("/chart").get(getAllChart);
router.route("/").get(getAllRecords);

router.route("/").post(createRecords);
router.route("/:id").put(updateRecords);
router.route("/:id").delete(deleteRecords);

module.exports = router;
