const express = require("express");
const {
  getHome,
  getDetails,
  createUser,
} = require("../controllers/home.controller");
const {
  validateUserCreationMiddleware,
} = require("../middlewares/userValdation/userValidationMiddleware");
const router = express.Router();

router.get("/", getHome);

router.get("/getDetail", getDetails);

// CRUD

router.post("/createUser", validateUserCreationMiddleware, createUser);

module.exports = router;
