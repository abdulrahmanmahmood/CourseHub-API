const express = require("express");
const bodyParser = require("body-parser");
const { validatoinRules } = require("../Middleware/validationSchema");

const {
  getCourses,
  getSingleCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses.controllers");
const router = express.Router();

router.use(bodyParser.json());

router.route("/").get(getCourses).post(validatoinRules, addCourse);
router
  .route("/:courseId")
  .get(getSingleCourse)
  .patch(updateCourse)
  .delete(deleteCourse);

module.exports = router;
