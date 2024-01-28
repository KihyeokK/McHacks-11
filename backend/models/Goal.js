const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalSchema = new Schema({
    goalName: { type: String, required: true },
    goalDescription: { type: String, required: true },
    users: [
        { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }
    ],
    photos: [{ type: mongoose.Schema.Types.ObjectId, required: true }]
});

module.exports = mongoose.model("Goal", goalSchema);
