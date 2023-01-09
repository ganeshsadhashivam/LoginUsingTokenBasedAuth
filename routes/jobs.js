const express = require("express");
const router = express.Router();

const { register } = require("../controllers/auth");

const {
  getAllJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobs");
//const authenticationMiddleware = require("../middleware/auth");

// router.route("/dashboard").get(authenticationMiddleware, dashboard);
// router.route("/login").post(login);

// router.post("/register", register);
// router.post("/login", login);

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getJob).delete(deleteJob).patch(updateJob);
module.exports = router;
