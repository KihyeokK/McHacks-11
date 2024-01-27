const express = require("express");
const userController = require("../controllers/user.controller");

const userRouter = express.Router();

// Remember that all api routes start with /api then specific routes like /users/:id

// get all users
userRouter.get("/users", userController.getAllUsers);

// get a specific user from database.
userRouter.get("/users/:id", userController.getUser);

// create/post user
userRouter.post("/users");

module.exports = userRouter;