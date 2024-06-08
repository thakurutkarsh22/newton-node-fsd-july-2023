const joi = require("joi");

const createBlogSchema = joi.object({
  title: joi.string().min(3).max(100).required(),
  description: joi.string().min(10).required(),
  tag: joi.array().required(),
});

module.exports = { createBlogSchema };
