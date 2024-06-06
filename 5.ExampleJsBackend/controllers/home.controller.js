const {
  createuserservice,
  getAllUsersService,
} = require("../services/home.service");

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

async function createUser(req, res, next) {
  try {
    const { status, message } = await createuserservice(req.body);

    res.json({
      message: message,
      status: status,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some error occured !!! " + error.message,
    });
  }
}

async function getAllUsers(req, res, next) {
  try {
    const { status, message, data } = await getAllUsersService();

    res.json({
      status,
      message,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some error occured !!! " + error.message,
    });
  }
}

module.exports = { getHome, getDetails, createUser, getAllUsers };
