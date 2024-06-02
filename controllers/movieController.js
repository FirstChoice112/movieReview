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

//* Get all movies.
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong 🤯" });
  }
};

//* Get movie by id.
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found 🤷‍♂️" });
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong 🤯" });
  }
};

//* Update a movie.
const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found 🤷‍♂️" });
    }
    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong 🤯" });
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
};
