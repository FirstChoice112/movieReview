//* Innehåller routes för recensioner.
const express = require("express");
const router = express.Router();
const {
  addReview,
  getAllReviews,
  getReviewById,
  updateReview,
} = require("../controllers/reviewController");

router.post("/", addReview);
router.get("/", getAllReviews);
router.get("/:id", getReviewById);
router.patch("/:id", updateReview);

module.exports = router;
