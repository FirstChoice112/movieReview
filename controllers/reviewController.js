//*Hanterar CRUD-operationer för recensioner.
const Review = require("../models/Review");

//* Add Review
const addReview = async (req, res) => {
  try {
    const { movieId, userId, rating, comment } = req.body;
    const review = new Review({ movieId, userId, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong 🤯" });
  }
};

//* Get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong 🤯" });
  }
};

//* Get review by id
const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "Review not found 🤷‍♂️" });
    }
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong 🤯" });
  }
};

//* Update review
const updateReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      {
        rating,
        comment,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updateReview) {
      return res.status(404).json({ message: "Review not found 🤷‍♂️" });
    }
    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong 🤯" });
  }
};

//* Delete review
const deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found 🤷‍♂️" });
    }
    res.status(200).json({
      status: "success, Review deleted successfully 😎",
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong 🤯" });
  }
};

//* Get review by Movie Id.
const getReviewByMovieId = async (req, res) => {
  try {
    const review = await Review.find({ movieId: req.params.id });
    if (!review) {
      return res
        .status(404)
        .json({ message: "No Review found for this movie 🤷‍♂️" });
    }
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong 🤯" });
  }
};

module.exports = {
  addReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
  getReviewByMovieId,
};
