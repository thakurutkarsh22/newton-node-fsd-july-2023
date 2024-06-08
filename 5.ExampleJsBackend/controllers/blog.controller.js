const { createBlogService } = require("../services/blog.service");

async function createBlog(req, res, next) {
  try {
    const { status, message } = await createBlogService(req.body); // service

    res.status(status).json({
      message,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some error occured !!! " + error.message,
    });
  }
}

module.exports = { createBlog };
