const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/auth");

//const authenticationMiddleware = require("../middleware/auth");

// router.route("/dashboard").get(authenticationMiddleware, dashboard);
// router.route("/login").post(login);

router.post("/register", register);
router.post("/login", login);

module.exports = router;
