const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userID: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  numCompletedCollages: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema);
