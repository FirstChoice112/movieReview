//* Movie-routes.
const express = require("express");
const router = express.Router();
const {
  addMovie,
  getAllMovies,
  getMovieById,
} = require("../controllers/movieController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, addMovie);
router.get("/", getAllMovies);
router.get("/:id", getMovieById);

module.exports = router;
