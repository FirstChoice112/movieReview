const Movie = require("../models/Movie");
const Review = require("../models/Review");
//* Get movie with average ratings
const getMovieWithRatings = async () => {
  try {
    const movies = await Movie.aggregate([
      {
        $lookup: {
          from: "reviews",
          localField: "_id",
          foreignField: "movieId",
          as: "reviews",
        },
      },
      {
        $match: {
          reviews: { $exists: true, $ne: [] },
        },
      },
      {
        $addFields: {
          averageRating: {
            $avg: "$reviews.rating",
          },
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          director: 1,
          releaseYear: 1,
          genre: 1,
          averageRating: 1,
        },
      },
    ]);
    return movies;
  } catch (err) {
    console.error(err);
    throw new Error("Aggregation failed");
  }
};

module.exports = { getMovieWithRatings };
