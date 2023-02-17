const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const usersRouter = require("./routes/usersRoutes");
const connectDB = require("./config/db");
const session = require("express-session");
const MongoDBsStore = require("connect-mongodb-session")(session);

connectDB();
// offlineConnect();

const PORT = process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret key",
    resave: true,
    saveUninitialized: true,
    // cookie: {
    //   maxAge: 1000 * 60 * 60 * 24 * 30, // 1 month
    // },
    store: new MongoDBsStore({
      uri: process.env.MONGO_URL,
      collection: "session",
      expires:86400 * 1000, // 1 day  (60* 60 * 24)
    }),
  })
);

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
