const express = require("express");
const goalController = require("../controllers/goalController.js");

//add goal
goalRouter.post("/goals", goalController.addGoal);

//get goal
goalRouter.get("/goals/:goalID", goalController.getGoal);

//get all goals for user
goalRouter.get("/goals", goalController.getAllGoals);

//add image to goal
goalRouter.post("/goals/:id/image", goalController.addImage);
