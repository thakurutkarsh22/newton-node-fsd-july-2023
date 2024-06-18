const UserModel = require("../database/Models/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function loginUserService(body, secret) {
  try {
    const { username = "", password = "" } = body;
    const foundUser = await UserModel.find({ username: username });

    const validatePasword = bcrypt.compareSync(password, foundUser[0].password);

    if (foundUser && validatePasword) {
      const payload = {
        user: { id: foundUser[0]._id.toString(), name: foundUser[0].username },
        role: "user",
      };
      const authToken = jwt.sign(payload, secret, { expiresIn: "1h" });

      return {
        status: 200,
        token: authToken,
      };
    } else {
      return {
        status: 401,
        message: "Authentication failed",
      };
    }
  } catch (error) {
    throw new Error("Cant Login Give good credentials" + error.message);
  }
}

module.exports = { loginUserService };
