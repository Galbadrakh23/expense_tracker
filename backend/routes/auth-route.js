const { Router } = require("express");

const { signIn, signUp } = require("../controllers/auth-controllers");

const router = Router();

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);

module.exports = router;
