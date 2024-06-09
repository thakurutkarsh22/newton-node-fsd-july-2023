const BlogsModel = require("../database/Models/Blogs.model");

async function createBlogService(body, username, userId) {
  try {
    const { title, description, tag } = body;
    const newBLog = new BlogsModel({
      title,
      description,
      tag,
      username,
      user: userId,
    });

    await newBLog.save(); //

    return {
      status: 201,
      message: "Blog Created Successfully" + newBLog._id,
    };
  } catch (error) {
    throw new Error(
      "BLog Creation failed !!! Some error Occured " + error.message
    );
  }
}

module.exports = { createBlogService };
