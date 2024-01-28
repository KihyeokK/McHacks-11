const mongoose = require("mongoose");
const { Schema } = mongoose;

const friendsSchema = new Schema({
    friendPair: {
        type: Array,
        required: true,
        ref: "User",
        validate: {
            validator: function (arr) {
                return arr.length <= 2;
            },
            message: "The friendPair array can have a maximum of 2 elements."
        }
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "accepted"]
    }
});
