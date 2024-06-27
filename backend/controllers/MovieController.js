
const Movie = require('../models/Movie');

const getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

const addMovie = async (req, res) => {
  const movie = new Movie(req.body);
  const createdMovie = await movie.save();
  res.status(201).json(createdMovie);
};

const updateMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (movie) {
    movie.title = req.body.title || movie.title;
    movie.description = req.body.description || movie.description;
    movie.releaseYear = req.body.releaseYear || movie.releaseYear;
    movie.genre = req.body.genre || movie.genre;
    movie.watched = req.body.watched !== undefined ? req.body.watched : movie.watched;
    movie.rating = req.body.rating || movie.rating;
    movie.review = req.body.review || movie.review;

    const updatedMovie = await movie.save();
    res.json(updatedMovie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
};

const deleteMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (movie) {
    await movie.remove();
    res.json({ message: 'Movie removed' });
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
};

module.exports = {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
};
