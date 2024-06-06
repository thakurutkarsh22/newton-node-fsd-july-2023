class UserNotValidException extends Error {
  constructor(message) {
    super(message);
  }
}

class UserNotCreated extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = { UserNotValidException, UserNotCreated };
