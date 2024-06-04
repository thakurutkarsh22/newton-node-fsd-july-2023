const UserModel = require("../database/Models/User.model");

function getHome(req, res) {
  res.json({
    name: "utkasrh",
    class: "9th",
    age: 17,
  });
}

function getDetails(req, res) {
  res.json({
    detail: "its nice",
  });
}

// CRUD

async function createUser(req, res) {
  const { username, password, email } = req.body;
  try {
    const userObj = new UserModel({
      username: username,
      password: password,
      email: email,
    });

    await userObj.save();

    res.json({
      message: "success!! created the user " + userObj._id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some error occured" + error.message,
    });
  }
}

module.exports = { getHome, getDetails, createUser };
