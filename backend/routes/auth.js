
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");

// Registration Route
router.post("/register", authController.register);

// Login Route
router.post("/login", authController.login);

module.exports = router;
