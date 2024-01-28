const mongoose = require("mongoose");
const User = require("../../models/User.js");
const Goal = require("../../models/Goal.js");
const exp = require("constants");
const dotenv = require("dotenv");
const path = require("path");

import("chai").then((chai) => {
    const expect = chai.expect;
});

// // Load environment variables from the specified .env file
// dotenv.config({ path: path.resolve(__dirname, "../../.env") });
// const MONGODB_URI = process.env.MONGODB_URI;
// describe("Goal Model Test", () => {
//     before(async () => {
//         await mongoose.connect(MONGODB_URI);
//     });
//     after(async () => {
//         await mongoose.connection.close();
//     });
//     it("should not be allowed to create a goal without required fields", async () => {
//         const goal = new Goal();
//         goal.validate((err) => {
//             expect(err.errors.goalID).to.exist;
//             expect(err.errors.goalName).to.exist;
//             expect(err.errors.goalDescription).to.exist;
//             expect(err.errors.users).to.exist;
//         });
//     });
// });
