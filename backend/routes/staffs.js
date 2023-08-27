const express = require("express");
const router = express.Router();
const StaffController = require("../controllers/staff.controller");
const ErrorHandler = require("../middleware/error.middleware");

/* GET users listing. */
router.get("/", ErrorHandler(StaffController.getAllStaff));

module.exports = router;
