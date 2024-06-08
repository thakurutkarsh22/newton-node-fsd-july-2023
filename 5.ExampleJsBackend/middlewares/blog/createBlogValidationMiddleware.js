const { createBlogSchema } = require("../joi/joiCreateBlogSchema");

function createBlogValidationMiddleware(req, res, next) {
  const { error } = createBlogSchema.validate(req.body);

  if (error) {
    res.status(400).json({
      error,
    });
  } else {
    next();
  }
}

module.exports = { createBlogValidationMiddleware };
