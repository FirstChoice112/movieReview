//* includes Routes for Auth and login.
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists 😶‍🌫️" });
    }

    const newuser = new User({
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });
    await newuser.save();
    res.status(201).json({ message: "User created 😀" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong 😶‍🌫️" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User does not exist 😶‍🌫️" });
    }

    //* Checks if passwords match
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }

    //* Create JWT-token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    //* Send token
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong 😶‍🌫️" });
  }
});

module.exports = router;
