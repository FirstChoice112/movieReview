//* Movie-routes.
const express = require("express");
const router = express.Router();
const {
  addMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} = require("../controllers/movieController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, addMovie);
router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.patch("/:id", authMiddleware, updateMovie);

module.exports = router;
