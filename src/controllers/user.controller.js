const express = require("express");
const User = require("../models/user.model");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("", authenticate, async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.send(users);
  } catch (e) {
    return res.send(e.message);
  }
});

module.exports = router;
