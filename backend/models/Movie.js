const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  releaseYear: { type: Number },
  genre: { type: String },
  watched: { type: Boolean, default: false },
  rating: { type: Number, min: 1, max: 5 },
  review: { type: String },
}, {
  timestamps: true,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;