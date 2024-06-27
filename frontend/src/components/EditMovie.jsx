import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { updateMovie, listMovies } from '../redux/actions/movieActions';

const EditMovie = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  // Fetching movie details from Redux store
  const movieList = useSelector((state) => state.movieList);
  const { movies } = movieList;
  const movie = movies.find((movie) => movie._id === id);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    releaseYear: '',
    genre: '',
    rating: 1,
    watched: false
  });

  useEffect(() => {
    if (!movie) {
      dispatch(listMovies());
    } else {
      setFormData({
        title: movie.title || '',
        description: movie.description || '',
        releaseYear: movie.releaseYear || '',
        genre: movie.genre || '',
        rating: movie.rating || 1,
        watched: movie.watched || false
      });
    }
  }, [dispatch, id, movie]);

  const { title, description, releaseYear, genre, rating, watched } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!movie || !movie._id) {
      console.error('Movie object or _id is undefined');
      return;
    }
    dispatch(updateMovie(movie._id, formData));
    history.push('/');
  };

  return (
    <div className="container mt-4">
      <h2 style={{color: "white"}}>Edit Movie</h2>
      <form onSubmit={submitHandler} 
            style={{width: "60%"}}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label style={{color: "white"}}>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label style={{color: "white"}}>Release Year</label>
          <input
            type="number"
            className="form-control"
            name="releaseYear"
            value={releaseYear}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label style={{color: "white"}}>Genre</label>
          <input
            type="text"
            className="form-control"
            name="genre"
            value={genre}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label style={{color: "white"}}>Rating</label>
          <input
            type="number"
            className="form-control"
            min="1"
            max="5"
            name="rating"
            value={rating}
            onChange={handleChange}
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="watchedCheckbox"
            name="watched"
            style={{color: "white"}}
            checked={watched}
            onChange={handleCheckboxChange}
          />
          <label style={{color: "white"}} className="form-check-label" htmlFor="watchedCheckbox">
            Watched
          </label>
        </div>

        <button type="submit" className="btn btn-primary" style={{width: "30%"}}>Update Movie</button>
      </form>
    </div>
  );
};

export default EditMovie;
