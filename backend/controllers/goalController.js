const express = require("express");
const Goal = require("../models/Goal.js");
const goalRouter = express.Router();

// create goal
exports.addGoal = async (req, res) => {
    try {
        const { title, description, userID } = req.body;
        const goal = new Goal({
            users: [userID],
            title: title,
            description: description
        });
        await goal.save();
        res.status(201).json({ goal });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
