const { UserNotValidException } = require("../../exceptions/UserNotValid");
const { createUserSchema } = require("../joi/joiSchema");

function validateUserCreationMiddleware(req, res, next) {
  const { error } = createUserSchema.validate(req.body);

  // THIS IS MY VALIDATION WHICH IS NOT EFFECTIVE LIKE JOI SCHEMA
  // const {username, email, contact} = req.body;

  // if(!username) {

  // } else if (username.length > 3 && username.length < 25) {

  // } else if (usernameRegex.match(/asdasd/)) {

  // }

  if (error) {
    return res.status(400).json({
      error,
    });
  } else {
    next();
  }
}

module.exports = { validateUserCreationMiddleware };
