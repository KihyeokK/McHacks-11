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

// get goal
exports.getGoal = async (req, res) => {
    try {
        const goal = await Goal.findOne({ goalID: req.params.goalID });
        res.status(200).json({ goal });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// get all users for current goal
exports.getAllGoals = async (req, res) => {
    try {
        const goals = await Goal.find();
        res.status(200).json({ goals });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// add image to goal
exports.addImage = async (req, res) => {
    try {
        const goal = await Goal.findOne({ goalID: req.params.id });
        goal.images.push(req.body.image);
        res.status(200).json({ goal });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
