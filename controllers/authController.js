//*Hanterar registrering och inloggning av användare.

// authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function registerUser(req, res) {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists 😶‍🌫️" });
    }

    const newuser = new User({
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      isAdmin: req.body.isAdmin || false,
    });
    await newuser.save();

    const payload = {
      userId: newuser._id,
    };

    res.status(201).json({ message: "User created 😀" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong 😶‍🌫️" });
  }
}

async function loginUser(req, res) {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User does not exist 😶‍🌫️" });
    }

    //* Checks if passwords match
    const passwordMatch = await bcrypt.compare(password, user.password);
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
}

module.exports = { registerUser, loginUser };
