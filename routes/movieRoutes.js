//* Movie-routes.
const express = require("express");
const router = express.Router();
const {
  addMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  getAllMoviesWithRatings,
} = require("../controllers/movieController");
const { getReviewByMovieId } = require("../controllers/reviewController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

router.post("/", authMiddleware, adminMiddleware, addMovie);
router.get("/", getAllMovies);
router.get("/ratings", getAllMoviesWithRatings);
router.get("/:id", getMovieById);
router.patch("/:id", authMiddleware, adminMiddleware, updateMovie);
router.delete("/:id", authMiddleware, adminMiddleware, deleteMovie);
router.get("/:id/reviews", getReviewByMovieId);

module.exports = router;
