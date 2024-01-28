const express = require("express");
const Goal = require("../models/Goal.js");
const goalRouter = express.Router();
const fs = require("fs");
const { GridFSBucket } = require("mongodb");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });
const MONGODB_URI = process.env.MONGODB_URI;

let gfs;
const conn = mongoose.createConnection(process.env.MONGODB_URI);
conn.once("open", () => {
    const db = conn.db;
    gfs = new GridFSBucket(db, {
        bucketName: "uploads"
    });
});

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
        const imageID = req.body.imageID;
        const image = await gfs.find({ _id: imageID });
        goal.images.push(image);
        res.status(200).json({ goal });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// remove user from goal

exports.removeUser = async (req, res) => {
    try {
        const user = await User.findOne({ userID: req.params.userID });
        const goal = await Goal.findOne({ goalID: req.params.goalID });
        goal.users.remove(user);
        res.status(200).json({ goal });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
