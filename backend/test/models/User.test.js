const mongoose = require("mongoose");
const User = require("../../models/User.js");
const Goal = require("../../models/Goal.js");
const exp = require("constants");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables from the specified .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI);
import("chai").then((chai) => {
  const expect = chai.expect;
});

describe("User Model Test", () => {
  before(async () => {
    await mongoose.connect(MONGODB_URI);
  });
  after(async () => {
    await mongoose.connection.close();
  });
  it("should not be allowed to create a user without required fields", async () => {
    const user = new User();
    user.validate((err) => {
      expect(err.errors.userID).to.exist;
      expect(err.errors.username).to.exist;
      expect(err.errors.password).to.exist;
      expect(err.errors.email).to.exist;
      expect(err.errors.numCompletedCollages).to.exist;
    });
  });
});

describe("User add Test", () => {
  before(async () => {
    await mongoose.connect(MONGODB_URI);
  });
  after(async () => {
    await mongoose.connection.close();
  });
  it("should add a user to the database", async () => {
    const user = new User({
      userID: "321",
      username: "test1",
      password: "test1",
      email: "aa@b.com",
      numCompletedCollages: 0,
    });
    await user.save();
    const foundUser = await User.findOne({ userID: "123" });
    user.validate((err) => {
      expect(foundUser.userID).to.equal("321");
      expect(foundUser.username).to.equal("test");
      expect(foundUser.password).to.equal("test");
      expect(foundUser.email).to.equal("a@b.com");
    });
  });
});

describe("Goal Model Test", () => {
  before(async () => {
    await mongoose.connect(MONGODB_URI);
  });
  after(async () => {
    await mongoose.connection.close();
  });
  it("should not be allowed to create a goal without required fields", async () => {
    const goal = new Goal();
    goal.validate((err) => {
      expect(err.errors.goalID).to.exist;
      expect(err.errors.goalName).to.exist;
      expect(err.errors.goalDescription).to.exist;
      expect(err.errors.users).to.exist;
    });
  });
});
