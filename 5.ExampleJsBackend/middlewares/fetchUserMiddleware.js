const jwt = require("jsonwebtoken");

function fetchUser(req, res, next) {
  const JWT_SECRET = process.env.JWT_SECRET;
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    res.status(400).json({
      message: "Please Login !! ",
    });
  } else {
    jwt.verify(token, JWT_SECRET, (error, decodedString) => {
      if (error) {
        res.status(401).json({
          message: "Re-login again",
        });
      } else {
        console.log(decodedString, "decodedString");
        const username = decodedString.user.name;
        const userId = decodedString.user.id;
        const role = decodedString.role;
        req.xyzUser = username;
        req.userId = userId;
        req.role = role;
        console.log(userId, "decoded user ID");
        next();
      }
    });
  }
}

module.exports = { fetchUser };
