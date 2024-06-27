import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const MovieItem = ({ movie, deleteMovie }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteMovie(movie._id));
    }
  };
 
  return (
    <div className="card mb-3" style={{ backgroundColor: '#1a1a1a', color: '#F5C518' , fontFamily: 'Georgia, serif' }}>
      <div className={`card-body d-flex flex-column ${movie.watched ? 'border-success' : 'border-danger'}`}>
        <h3 className="card-title" style={{ textAlign: 'center', textDecoration: 'none', marginBottom: '25px' }}>
          {movie.title}
        </h3>
        <p className="card-text flex-grow-1"><strong>Description:</strong> {movie.description}</p>
        <p className="card-text"><strong>Release Year:</strong> {movie.releaseYear}</p>
        <p className="card-text"><strong>Genre:</strong> {movie.genre}</p>
        <p className="card-text">
          <strong>Watched:</strong> {movie.watched ? 'Yes' : 'No'}
        </p>
        <p className="card-text"><strong>Rating:</strong> {movie.rating}🌟 </p>
        <div style={{ display: 'flex' }}>
          <Link to={`/edit/${movie._id}`} className="btn btn-warning" style={{ marginRight: '8px' }}>Edit</Link>
          <button onClick={handleDelete} className="btn btn-danger" style={{ marginRight: '8px' }}>Delete</button>
          <Link to={`/movie/${movie._id}`} className="btn btn-info">i</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
