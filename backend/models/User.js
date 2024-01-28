const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    numCompletedCollages: { type: Number, required: true, default: 0 },
    photots: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Image", required: true }
    ],
    goals: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Goal", required: true }
    ],
    friends: [
        { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
    ]
});

/**
 * search for friend
 * add friend
 * accept friend requests
 * remove friend
 */

module.exports = mongoose.model("User", userSchema);
