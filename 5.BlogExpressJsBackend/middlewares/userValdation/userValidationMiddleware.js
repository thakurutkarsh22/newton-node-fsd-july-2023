const { UserNotValidException } = require("../../exceptions/UserNotValid");
const { createUserSchema } = require("../joi/joiSchema");

function validateUserCreationMiddleware(req, res, next) {
  const { error } = createUserSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      error,
    });
  } else {
    next();
  }
}

module.exports = { validateUserCreationMiddleware };
