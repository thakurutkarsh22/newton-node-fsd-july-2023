const express = require("express");
const { createBlog } = require("../controllers/blog.controller");
const {
  createBlogValidationMiddleware,
} = require("../middlewares/blog/createBlogValidationMiddleware");
const { fetchUser } = require("../middlewares/fetchUserMiddleware");
const router = express.Router();

router.post("/create", fetchUser, createBlogValidationMiddleware, createBlog);

module.exports = router;
