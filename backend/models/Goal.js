const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalSchema = new Schema({
  goalName: { type: String, required: true },
  goalDescription: { type: String, required: true },
  users: { type: Array, required: true, ref: "User" },
  photos: { type: Array, required: true, ref: "upload.files" },
});

module.exports = mongoose.model("Goal", goalSchema);
