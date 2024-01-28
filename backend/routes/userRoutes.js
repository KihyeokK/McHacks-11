const express = require("express");
const userController = require("../controllers/userController.js");

const userRouter = express.Router();

// Remember that all api routes start with /api then specific routes like /users/:id

//create user
userRouter.post("/users", userController.createUser);

// get a specific user from database.
userRouter.get("/users/:id", userController.getUser);

// get user's friends
userRouter.get("/users/:userID/friends", userController.getFriends);

// add friend
userRouter.post("/users/:userID/friends/:friendID", userController.addFriend);

// remove friend
userRouter.delete(
    "/users/:userID/friends/:friendID",
    userController.removeFriend
);

module.exports = userRouter;
