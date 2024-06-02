//* Movie-routes.
const express = require("express");
const router = express.Router();
const {
  addMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");
const { getReviewByMovieId } = require("../controllers/reviewController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, addMovie);
router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.patch("/:id", authMiddleware, updateMovie);
router.delete("/:id", authMiddleware, deleteMovie);
router.get("/:id/reviews", getReviewByMovieId);

module.exports = router;
