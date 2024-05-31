//* Movie-routes.
const express = require("express");
const router = express.Router();
const { addMovie } = require("../controllers/movieController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, addMovie);

module.exports = router;
