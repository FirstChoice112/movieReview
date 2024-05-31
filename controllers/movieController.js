//* Handle movie requests.

//* Add a movie.
const Movie = require("../models/Movie");

const addMovie = async (req, res) => {
  try {
    const { title, director, releaseYear, genre } = req.body;

    const newMovie = new Movie({ title, director, releaseYear, genre });
    await newMovie.save();

    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong 🤯" });
  }
};

module.exports = {
  addMovie,
};
