const express = require("express");
const { getHome, getDetails } = require("../controllers/home.controller");
const router = express.Router();

router.get("/", getHome);

router.get("/getDetail", getDetails);

module.exports = router;
