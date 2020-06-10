const express = require("express");
const users = require("./users.json");

const userRouter = express.Router();

userRouter.get("/", async function (req, res, next) {
  res.send(users);
});

module.exports = userRouter;
