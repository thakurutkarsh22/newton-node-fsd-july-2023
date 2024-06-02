const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 25,
      unique: [true, "Username Should be Unique"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email Should be Unique"],
      min: 5,
      max: 55,
    },

    password: {
      type: String,
      required: [true, "Password is require buddy!!"],
      min: 6,
    },
    contact: {
      type: Number,
      min: 10,
      max: 10,
    },
  },

  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
