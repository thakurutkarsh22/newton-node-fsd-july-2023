const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },

    description: {
      type: Schema.Types.String,
      required: true,
      minLength: 10,
    },

    tag: {
      type: [String],
      required: true,
      default: ["general"],
    },

    imageUrl: {
      type: String,
      default: "",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },

    username: { type: String },
  },
  { timestamps: true }
);

const BlogsModel = mongoose.model("Blogs", blogSchema);

module.exports = BlogsModel;
