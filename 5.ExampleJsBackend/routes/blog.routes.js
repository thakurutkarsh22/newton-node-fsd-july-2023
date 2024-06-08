const express = require("express");
const { createBlog } = require("../controllers/blog.controller");
const router = express.Router();

router.post("/create", createBlog);

module.exports = router;
