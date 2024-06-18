const express = require("express");
const { createBlog } = require("../controllers/blog.controller");
const {
  createBlogValidationMiddleware,
} = require("../middlewares/blog/createBlogValidationMiddleware");
const { fetchUser } = require("../middlewares/fetchUserMiddleware");
const { authorizeRole } = require("../middlewares/authorizeRole");
const router = express.Router();

router.post(
  "/create",
  fetchUser,
  authorizeRole("user"),
  createBlogValidationMiddleware,
  createBlog
);

module.exports = router;
