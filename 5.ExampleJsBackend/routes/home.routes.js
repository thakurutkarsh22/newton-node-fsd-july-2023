const express = require("express");
const {
  getHome,
  getDetails,
  createUser,
  getAllUsers,
} = require("../controllers/home.controller");
const {
  validateUserCreationMiddleware,
} = require("../middlewares/userValdation/userValidationMiddleware");
const router = express.Router();

router.get("/", getHome);

router.get("/getDetail", getDetails);

// CRUD

router.post("/createUser", validateUserCreationMiddleware, createUser);

router.get("/getallUsers", getAllUsers);

// router.get("/getUser/:id")

module.exports = router;
