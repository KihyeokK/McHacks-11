const mongoose = require("mongoose");
const User = require("../../models/User.js");
const Goal = require("../../models/Goal.js");
const exp = require("constants");
const dotenv = require("dotenv");
const path = require("path");
const app = require("../../server.js");
const request = require("supertest");

// import("chai").then((chai) => {
//     const expect = chai.expect;
// });

// // Load environment variables from the specified .env file
// dotenv.config({ path: path.resolve(__dirname, "../../.env") });
// const MONGODB_URI = process.env.MONGODB_URI;

// Test suite
// describe("User add Test, where numcompleted, groups, friends are default value", () => {
//     before(async () => {
//         await mongoose.connect(MONGODB_URI);
//     });
//     after(async () => {
//         await User.findOneAndDelete({ username: "test" });
//         await mongoose.connection.close();
//     });
//     it("should add a user to the database", async () => {
//         const user = new User({
//             username: "test",
//             password: "test",
//             email: "a@b.com"
//         });
//         await user.save();
//         const foundUser = await User.findOne({ username: "test" });
//         user.validate((err) => {
//             expect(foundUser.username).to.equal("test");
//             expect(foundUser.password).to.equal("test");
//             expect(foundUser.email).to.equal("a@b.com");
//             expect(foundUser.numCompletedCollages).to.equal(0);
//             expect(foundUser.group.length).to.equal(0);
//             expect(foundUser.friends.length).to.equal(0);
//             expect(foundUser.images.length).to.equal(0);
//         });
//     });
// });

// describe("Add friend Test", () => {
//     before(async () => {
//         await mongoose.connect(MONGODB_URI);
//     });
//     after(async () => {
//         await User.findOneAndDelete({ username: "user_friend" });
//         await User.findOneAndDelete({ username: "friend" });
//         await mongoose.connection.close();
//     });
//     it("should add a friend to the database", async () => {
//         const user = new User({
//             username: "user_friend",
//             password: "user_friend",
//             email: "user_friend@friend.com"
//         });
//         const friend = new User({
//             username: "friend",
//             password: "friend",
//             email: "friend@friend.com"
//         });
//         await user.save();
//         await friend.save();
//         user.friends.push(friend);
//         await user.save();
//         const foundUser = await User.findOne({ username: "user_friend" });
//         const foundFriend = await User.findOne({ username: "friend" });
//         User.validate((err) => {
//             expect(foundUser.friends).to.include(foundFriend);
//         });
//     });
// });

// describe("Remove friend Test", () => {
//     before(async () => {
//         await mongoose.connect(MONGODB_URI);
//     });
//     after(async () => {
//         await User.findOneAndDelete({ username: "user_friend_remove" });
//         await User.findOneAndDelete({ username: "friend_remove" });
//         await mongoose.connection.close();
//     });
//     it("should remove a friend from the database", async () => {
//         const user = new User({
//             username: "user_friend_remove",
//             password: "user_friend_remove",
//             email: "user_friend_remove@friendRemove.com"
//         });
//         const friend = new User({
//             username: "friend_remove",
//             password: "friend_remove",
//             email: "friend_remove@friendRemove.com"
//         });
//         await user.save();
//         await friend.save();
//         user.friends.push(friend);
//         await user.save();
//         user.friends.remove(friend);
//         await user.save();
//         const foundUser = await User.findOne({
//             username: "user_friend_remove"
//         });
//         const foundFriend = await User.findOne({ username: "friend_remove" });
//         User.validate((err) => {
//             expect(foundUser.friends).to.not.include(foundFriend);
//         });
//     });
// });

describe("/users/:userID/friends/:friendID -- remove friend", () => {
    before(async () => {
        await mongoose.connect(MONGODB_URI);
    });
    after(async () => {
        await User.findOneAndDelete({ username: "user_friend_remove" });
        await User.findOneAndDelete({ username: "friend_remove" });
        await mongoose.connection.close();
    });
    it("should remove a friend from user's friend array", async function () {
        this.timeout(10000);
        const user = new User({
            username: "user_friend_remove",
            password: "user_friend_remove",
            email: "user_friend_remove@friendRemove.com"
        });
        const friend = new User({
            username: "friend_remove",
            password: "friend_remove",
            email: "friend_remove@friendRemove.com"
        });
        await user.save();
        await friend.save();
        const res = await request(app)
            .delete("/api/users/removeFriend")
            .send({
                friendID: friend._id,
                userID: user._id
            })
            .expect(200);
        user.validate((err) => {
            expect(res.body.user.friends).to.not.include(friend._id);
        });
    });
});
describe("/users/friends -- add friend", () => {
    before(async () => {
        await mongoose.connect(MONGODB_URI);
    });
    after(async () => {
        await User.findOneAndDelete({ username: "user_friend" });
        await User.findOneAndDelete({ username: "friend" });
        await mongoose.connection.close();
    });
    it("should add a friend to user's friend array", async function () {
        this.timeout(10000);
        const user = new User({
            username: "user_friend",
            password: "user_friend",
            email: "test@test.com"
        });
        const friend = new User({
            username: "friend",
            password: "friend",
            email: "user@user.com"
        });
        await user.save();
        await friend.save();
        const res = await request(app)
            .post("/api/users/friends")
            .send({
                friendID: friend._id,
                userID: user._id
            })
            .expect(200);
        user.validate((err) => {
            expect(res.body.user.friends).to.include(friend._id);
        });
    });
});
