//* Movie-routes.
const express = require("express");
const router = express.Router();
const { addMovie, getAllMovies } = require("../controllers/movieController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, addMovie);
router.get("/", getAllMovies);

module.exports = router;
