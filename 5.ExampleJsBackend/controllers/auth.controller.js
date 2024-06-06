const { loginUserService } = require("../services/auth.service");

async function loginUser(req, res, next) {
  try {
    const { status, token } = await loginUserService(
      req.body,
      process.env.JWT_SECRET
    );

    res.status(200).json({
      status: status,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some error occured !!! " + error.message,
    });
  }
}

module.exports = { loginUser };
