const nodemailer = require("nodemailer");
require("dotenv").config();
const sendEmail = async (email, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port:  465, //587 is a wrong port
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    await transporter.sendMail({
      from: "CMA APPLICATION <process.env.USER>",
      to: email,
      subject: subject,
      html: html,
    });
    console.log("email sent successfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = sendEmail;
