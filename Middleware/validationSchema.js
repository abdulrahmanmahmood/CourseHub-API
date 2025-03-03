const { body } = require("express-validator");

const validatoinRules = [
  body("title")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("title is required"),
  body("price")
    .notEmpty()
    .withMessage("price is required")
    .isInt({ min: 1 })
    .withMessage("price must be a positive number"),
];

module.exports = { validatoinRules };
