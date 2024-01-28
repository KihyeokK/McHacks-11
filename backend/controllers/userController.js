const express = require("express");
const user = require("../models/User.js");
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

exports.createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = new User({
            username: username,
            password: password,
            email: email,
            numCompletedCollages: 0,
            images: [],
            group: [],
            friends: []
        });
        await user.save();
        res.status(201).json({ user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findOne({ userID: req.params.id });
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getFriends = async (req, res) => {
    try {
        const user = await User.findOne({ userID: req.params.userID });
        const friends = await User.find({ _id: { $in: user.friends } });
        res.status(200).json({ friends });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.addFriend = async (req, res) => {
    try {
        const friend = await User.findOne({ userID: req.params.friendID });
        const user = await User.findOne({ userID: req.params.userID });
        user.friends.push(friend);
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.removeFriend = async (req, res) => {
    try {
        const friend = await User.findOne({ userID: req.params.friendID });
        const user = await User.findOne({ userID: req.params.userID });
        user.friends.remove(friend);
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.addImage = async (req, res) => {
    try {
        const userID = req.body.userID;
        const user = await User.findOne({ userID: userID });
        const fileID = req.body.fileID;
        const file = await gfs.find({ _id: fileID });
        user.images.push(file);
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
