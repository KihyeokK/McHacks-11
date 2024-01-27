const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalSchema = new Schema({
  goalID: { type: String, required: true, unique: true },
  goalName: { type: String, required: true },
  goalDescription: { type: String, required: true },
  users: { type: Array, required: true, ref: "User" },
});

module.exports = mongoose.model("Goal", goalSchema);
