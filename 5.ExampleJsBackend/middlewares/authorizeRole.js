function authorizeRole(role) {
  function validator(req, res, next) {
    console.log(req.role, "rolleess");
    if (req.role === role) {
      next();
    } else {
      res.sendStatus(403);
    }
  }

  return validator;
}

module.exports = { authorizeRole };
