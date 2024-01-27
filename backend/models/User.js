const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  numCompletedCollages: { type: Number, required: true },
  images: { type: Array, required: true },
  group: { type: Array, required: true },
});

module.exports = mongoose.model("User", userSchema);
