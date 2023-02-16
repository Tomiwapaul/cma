const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const logInToken = (userId) => {
  return jwt.sign({ userId }, process.env.VERIFY_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};
module.exports = logInToken;
