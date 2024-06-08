const UserModel = require("../database/Models/User.model");
const { UserNotCreated } = require("../exceptions/UserNotValid");

async function createuserservice(body) {
  try {
    const { username, password, email } = body;

    // THIS LINE CREATE USER AND VALIDATE ACCORDING TO USER SCHEMA
    const userObj = new UserModel({
      username: username,
      password: password,
      email: email,
    });

    await userObj.save(); // THIS ACTUALLY SAVES USER IN DATABASE

    return {
      status: 201,
      message: "User created Successfully ::: " + userObj._id,
    };
  } catch (error) {
    throw new UserNotCreated("USER NOT CREATED !!! " + error);
  }
}

async function getAllUsersService() {
  try {
    const results = await UserModel.find({});
    return {
      status: 200,
      message: "user fetch successfull",
      data: results,
    };
  } catch (error) {
    throw new Error(" Cant GET USer Sadly !!! ");
  }
}

module.exports = { createuserservice, getAllUsersService };
