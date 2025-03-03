const { validationResult } = require("express-validator");
const { courses } = require("../data/courses");
const getCourses = (req, res) => {
  res.json(courses);
};
const getSingleCourse = (req, res) => {
  console.log("req.params.courseId", req.params.courseId);
  const courseId = +req.params.courseId;
  const course = courses.find((course) => course.id === courseId);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  res.json(course);
};
const addCourse = (req, res) => {
  const errors = validationResult(req);
  // console.log("errors", errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const course = {
    id: courses.length + 1,
    title: req.body.title,
    price: req.body.price,
  };
  courses.push(course);
  res.status(201).json(course);
};
const updateCourse = (req, res) => {
  const courseId = +req.params.courseId;
  const course = courses.find((cour) => cour.id === courseId);
  if (!course) {
    return res.status(404).json({ message: "course not found" });
  }
  course.title = req.body.title;
  course.price = req.body.price;
  res.json(course);
};
const deleteCourse = (req, res) => {
  const courseId = +req.params.courseId;
  const courseIndex = courses.findIndex((cour) => cour.id === courseId);
  if (courseIndex === -1) {
    return res.status(404).json({ message: "Course not found" });
  }
  courses.splice(courseIndex, 1);
  res.json({ message: "Course deleted successfully" });
};
module.exports = {
  getCourses,
  getSingleCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
