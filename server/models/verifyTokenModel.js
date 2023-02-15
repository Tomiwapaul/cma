const mongoose = require("mongoose");

//declare the schema of the Mongo model
var verifyTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
  token: {
    type: String,
  },
});

//export the model
module.exports = mongoose.model("verifyToken", verifyTokenSchema);
