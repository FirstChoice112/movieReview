//* Review routes.
const express = require("express");
const router = express.Router();
const {
  addReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

router.post("/", addReview);
router.get("/", getAllReviews);
router.get("/:id", getReviewById);
router.patch("/:id", updateReview);
router.delete("/:id", deleteReview);

module.exports = router;
