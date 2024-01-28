const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    numCompletedCollages: { type: Number, required: true, default: 0 },
    images: { type: Array, required: true, default: [] },
    goals: { type: Array, required: true, ref: "Goal", default: [] },
    friends: { type: Array, required: true, ref: "User", default: [] }
});

/**
 * search for friend
 * add friend
 * accept friend requests
 * remove friend
 */

module.exports = mongoose.model("User", userSchema);
