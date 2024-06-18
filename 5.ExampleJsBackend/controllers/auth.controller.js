const { loginUserService } = require("../services/auth.service");

async function loginUser(req, res, next) {
  try {
    const {
      status,
      token,
      message = "",
    } = await loginUserService(req.body, process.env.JWT_SECRET);

    res.status(status).json({
      status,
      token,
      message,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some error occured !!! " + error.message,
    });
  }
}

module.exports = { loginUser };
