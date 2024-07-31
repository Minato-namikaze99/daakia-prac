const express = require("express");
const router = express.Router();
const appController = require("../../controllers/appController");

const { validate } = require("../../middleware/validator");
const schema = require("./schema");

router.post("/user/login", validate(schema.loginUser), appController.login);
router.post("/user/register", validate(schema.registerUser), appController.register);

module.exports = router;