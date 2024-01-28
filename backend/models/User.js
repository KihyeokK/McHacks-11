const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    numCompletedCollages: { type: Number, required: true },
    images: { type: Array, required: true },
    goal: { type: Array, required: true, ref: "Goal" },
    friends: { type: Array, required: true, ref: "User" }
});

/**
 * search for friend
 * add friend
 * accept friend requests
 * remove friend
 */

module.exports = mongoose.model("User", userSchema);
