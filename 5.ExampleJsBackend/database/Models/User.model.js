const mongoose = require("mongoose");
const { CONSTANTS_CREATE_USER } = require("../../util/constants");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      maxLength: CONSTANTS_CREATE_USER.max,
      minLength: CONSTANTS_CREATE_USER.min,
      unique: [true, "Username Should be Unique"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email Should be Unique"],
      min: 5,
      max: 55,
      maxLength: 55,
      minLength: 5,
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

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
