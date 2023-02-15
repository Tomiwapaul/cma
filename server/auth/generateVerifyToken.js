const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateVerifyToken = (userId) => {
  return jwt.sign({ userId }, process.env.VERIFY_TOKEN_SECRET, {
    expiresIn: "1h",
  });
};
module.exports = generateVerifyToken;
