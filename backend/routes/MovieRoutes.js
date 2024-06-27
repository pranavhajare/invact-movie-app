// const express = require('express');
// const {
//   getMovies,
//   addMovie,
//   updateMovie,
//   deleteMovie,
// } = require('../controllers/MovieController');

// const router = express.Router();

// router.route('/').get(getMovies).post(addMovie);
// router.route('/:id').patch(updateMovie).delete(deleteMovie);

// module.exports = router;

const express = require('express');
const {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/MovieController');

const router = express.Router();

// Add error handling middleware
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.route('/')
  .get(asyncHandler(getMovies))
  .post(asyncHandler(addMovie));

router.route('/:id')
  .patch(asyncHandler(updateMovie))
  .delete(asyncHandler(deleteMovie));

module.exports = router;
