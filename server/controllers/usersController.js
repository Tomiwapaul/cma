const UserModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const sendEmail = require("../services/sendEmail");
const verifyTokenModel = require("../models/verifyTokenModel");
const generateVerifyToken = require("../auth/generateVerifyToken");
require("dotenv").config();

//@description register a user
//method POST localhost:5000/api/users/register
const registerUser = async (req, res) => {
  console.log(req.body);

  //destructure data
  const {
    firstName,
    lastName,
    gender,
    dateOfBirth,
    country,
    state,
    city,
    username,
    email,
    phone,
    password,
    photo,
  } = req.body;

  try {
    // check if user email already exist
    const userExists = await UserModel.findOne({ email });

    //if user exist
    if (userExists) {
      res.status(400).send({ message: "User already exist" });
      throw new Error("User already exists");
    }
    //if user does not exist
    //generate salt
    const salt = await bcrypt.genSalt(10);
    //hash password
    const hashedPassword = await bcrypt.hash(password, salt);
    //create user
    const newUser = await UserModel.create({
      firstName,
      lastName,
      gender,
      dateOfBirth,
      country,
      state,
      city,
      username,
      email,
      phone,
      password: hashedPassword,
      photo,
    });
    //if user could not be created
    if (!newUser) {
      res.status(400).send({ message: "Invalid credentials" });
      throw new Error("User could not be created");
    }
    //if user created successfully

    //generate token
    const verificationToken = await generateVerifyToken(newUser.id);
    //store verification token and userId in DB
    const token = await verifyTokenModel.create({
      userId: newUser._id,
      token: verificationToken,
    });
    //structure http://localhost:3000/user/:userId/verify/:token
    const verificationUrl = `<a href="http://localhost:3000/user/${newUser._id}/verify/${verificationToken}"> verify your email</a>`;
    // let emailData = {
    //   email: newUser.email,
    //   subject: "Account Created",
    //   text: `Hello ${newUser.firstName} ${newUser.lastName}, your account has been created. please ${verificationUrl} to login.`,
    // };
    //send email
    sendEmail(
      newUser.email,
      "Account Created",
      `Hello ${newUser.firstName} ${newUser.lastName}, your account has been created. please ${verificationUrl} to login.`
    );

    return res.status(201).json({ message: "User registered", newUser, token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//@description verify a user
//method POST localhost:5000/api/users/:userId/verify/:token
const verifyUser = async (req, res) => {
  try {
      const { userId, token } = req.params;

      //check if token exists
      const foundToken = await verifyTokenModel.findOne({ token })
       
      //check if id exists
      const foundUser = await UserModel.findById(userId);

      if (!foundToken || !foundUser) { 
          res.status(400).send({ message: "invalid token" });
          throw new Error("invalid token");
      }



      //if token and user exist
      res.status(400).send({ message: "User not found" });
      throw new Error("User not found");
res.json({userId, token})
  } catch (error) {
    res.status(500).send({ message: error.message });
    return;
  }
};
//@description register a user
//method POST localhost:5000/api/users/login
const loginUser = (req, res) => {
  res.json({ message: "User loggedin" });
};

module.exports = { registerUser, verifyUser, loginUser };
