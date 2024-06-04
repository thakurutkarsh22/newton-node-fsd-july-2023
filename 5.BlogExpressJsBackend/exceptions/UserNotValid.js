class UserNotValidException extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = { UserNotValidException };
