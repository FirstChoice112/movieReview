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

module.exports = {
  addReview,
  getAllReviews,
};
