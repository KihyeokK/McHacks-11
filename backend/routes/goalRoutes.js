const express = require("express");
const goalController = require("../controllers/goalController.js");

const goalRouter = express.Router();
//add goal
goalRouter.post("/goals", goalController.addGoal);

//get goal
goalRouter.get("/goals/:goalID", goalController.getGoal);

//get all users for goal
goalRouter.get("/goals", goalController.getAllGoals);

//add image to goal
goalRouter.post("/goals/:id/image", goalController.addImage);

//add user to goal
goalRouter.post("/goals/:goalID/addUser", goalController.addUser);

//remove user from goal
goalRouter.delete("/goals/:goalID/removeUser", goalController.removeUser);

module.exports = goalRouter;
