// import User model
const User = require("../models/User");

exports.createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        console.log(req.body);
        console.log(username, password, email);
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
        const friendID = req.body.friendID;
        const userID = req.body.userID;
        const friend = await User.findOne({ _id: friendID });
        const user = await User.findOne({ _id: userID });
        user.friends.push(friend);
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.removeFriend = async (req, res) => {
    try {
        console.log(req.body);
        const friendID = req.body.friendID;
        const userID = req.body.userID;
        const friend = await User.findOne({ _id: friendID });
        const user = await User.findOne({ _id: userID });
        user.friends.remove(friend);
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
