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

describe("/users/:userID/images", () => {
    before(async () => {
        await mongoose.connect(MONGODB_URI);
    });
    after(async () => {
        await User.findOneAndDelete({ username: "test1" });
        await Goal.findOneAndDelete({ title: "test" });
        await mongoose.connection.close();
    });
    it("should add an image to the database", async () => {
        const user = new User({
            username: "test1",
            password: "test1",
            email: "test@test.com"
        });
        await user.save();
        const userID = user._id;
        const path_to_image = path.resolve(
            __dirname,
            "../../JPEG_example_flower.jpg"
        );
        const res = await request(app)
            .post("/api/upload")
            .attach("image", path_to_image);
        const imageID = res.body._id;
        const res2 = await request(app)
            .post(`/api/users/${userID}/images`)
            .send({
                _id: imageID
            });
        const foundUser = await User.findOne({ username: "test1" });
        foundUser.validate((err) => {
            expect(foundUser.images).to.include(imageID);
        });
    });
});
