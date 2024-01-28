const mongoose = require("mongoose");
const User = require("../../models/User.js");
const Goal = require("../../models/Goal.js");
const exp = require("constants");
const dotenv = require("dotenv");
const path = require("path");
const request = require("supertest");
const app = require("../../server.js");

import("chai").then((chai) => {
    const expect = chai.expect;
});

// Load environment variables from the specified .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const MONGODB_URI = process.env.MONGODB_URI;

// Test suite

describe("/goals -- add a goal", () => {
    before(async () => {
        await mongoose.connect(MONGODB_URI);
    });
    after(async () => {
        await User.findOneAndDelete({ username: "test1" });
        await Goal.findOneAndDelete({ title: "test" });
        await mongoose.connection.close();
    });
    it("should add a goal to the database", async () => {
        const user = new User({
            username: "test1",
            password: "test1",
            email: "test@test.com",
            numCompletedCollages: 0,
            images: [],
            goal: [],
            friends: []
        });
        await user.save();
        const userID = user._id;
        const res = await request(app).post("/api/goals").send({
            goalName: "test",
            goalDescription: "test",
            userID: userID.toString()
        });
        const foundGoal = await Goal.findOne({ goalName: "test" });
        foundGoal.validate((err) => {
            expect(foundGoal.goalName).to.equal("test");
            expect(foundGoal.goalDescription).to.equal("test");
            expect(foundGoal.users).to.include(user);
        });
    });
});

describe("/goals/:id/image -- add an image to a goal", () => {
    before(async () => {
        await mongoose.connect(MONGODB_URI);
    });
    after(async () => {
        await Goal.findOneAndDelete({ title: "test" });
        await mongoose.connection.close();
    });
    it("should add an image to a goal", async () => {
        const goal = new Goal({
            users: [],
            goalName: "test",
            goalDescription: "test",
            images: []
        });
        await goal.save();
        const goalID = goal._id;
        const path_to_image = path.resolve(
            __dirname,
            "../../JPEG_example_flower.jpg"
        );
        const res = await request(app)
            .post("/api/upload")
            .attach("image", path_to_image);
        const imageID = res.body.imageID;
        const res2 = await request(app)
            .post(`/api/goals/${goalID}/image`)
            .send({ imageID: imageID });
        const foundGoal = await Goal.findOne({ _id: goalID });
        foundGoal.validate((err) => {
            expect(foundGoal.images).to.include(imageID);
        });
    });
});
