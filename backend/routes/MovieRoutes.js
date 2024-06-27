const express = require('express');
const {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/MovieController');

const router = express.Router();

router.route('/').get(getMovies).post(addMovie);
router.route('/:id').patch(updateMovie).delete(deleteMovie);

module.exports = router;