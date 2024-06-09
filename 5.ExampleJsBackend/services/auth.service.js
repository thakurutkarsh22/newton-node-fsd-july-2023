const UserModel = require("../database/Models/User.model");
const jwt = require("jsonwebtoken");

async function loginUserService(body, secret) {
  try {
    const { username = "", password = "" } = body;
    const foundUser = await UserModel.find({ username: username });

    if (foundUser && foundUser[0].password === password) {
      const payload = {
        user: { id: foundUser[0]._id.toString(), name: foundUser[0].username },
      };
      const authToken = jwt.sign(payload, secret);

      return {
        status: 200,
        token: authToken,
      };
    } else {
      throw new Error();
    }
  } catch (error) {
    throw new Error("Cant Login Give good credentials" + error.message);
  }
}

module.exports = { loginUserService };
