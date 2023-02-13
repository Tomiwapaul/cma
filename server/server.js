const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const usersRouter = require("./routes/usersRoutes");

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use

//apis
app.use("/api/users", usersRouter);



//home page route
//get path
app.get("/", (req, res) => {
  res.send("welcome to home page");
});


// creating server
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}!`);
});
