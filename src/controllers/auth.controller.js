require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const router = express.Router();

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

//crud function for register

router.get("/register", (req, res) => {
  return res.status(200).render("register.ejs");
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  let user;
  try {
    // we will try to find the user with the email provided
    user = await User.findOne({ email: req.body.email }).lean().exec();

    // if the user is found then it is an error
    if (user)
      return res.status(400).send({ message: "Please try another email" });

    // if user is not found then we will create the user with the email and the password provided
    user = await User.create(req.body);

    // user = new User()
    // user.email = req.body.email
    // user.password = req.body.password
    // user.save();

    // then we will create the token for that user
    // const token = newToken(user);

    // then return the user and the token

    return res.status(200).redirect("/auth/login");
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});
//crud function for logi

router.get("/login", (req, res) => {
  return res.render("signIn.ejs");
});

router.post("/login", async (req, res) => {
  try {
    // we will try to find the user with the email provided
    const user = await User.findOne({ email: req.body.email });

    // If user is not found then return error
    if (!user)
      return res
        .status(400)
        .send({ message: "Please try another email or password" });

    // if user is found then we will match the passwords
    const match = user.checkPassword(req.body.password);

    if (!match)
      return res
        .status(400)
        .send({ message: "Please try another email or password" });

    // then we will create the token for that user
    const token = newToken(user);

    // then return the user and the token
    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = { router, newToken };
