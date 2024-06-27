import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  const movieList = useSelector(state => state.movieList);
  const { movies } = movieList;

  const movie = movies.find(movie => movie._id === id);

  return (
    <div className="container mt-4  justify-content-center">
      {movie ? (
        <div className="card" style={{ backgroundColor: '#1a1a1a', color: '#000', width: '50%', minHeight: '400px', borderRadius: '10px' ,fontFamily: 'Georgia, serif'}}>
          <div className="card-body">
            <h2 className="card-title" style={{ color: "#F5C518" }}>{movie.title}</h2>
            <hr />
            <h5 className="card-text" style={{ color: "#F5C518" }}><strong>Description:</strong> {movie.description}</h5>
            <h5 className="card-text" style={{ color: "#F5C518" }}><strong>Release Year:</strong> {movie.releaseYear}</h5>
            <h5 className="card-text" style={{ color: "#F5C518" }}><strong>Genre:</strong> {movie.genre}</h5>
            <h5 className="card-text" style={{ color: "#F5C518" }}><strong>Watched:</strong> <span style={{ color: movie.watched ? '#28a745' : '#dc3545' }}>{movie.watched ? 'Yes' : 'No'}</span></h5>
            <h5 className="card-text" style={{ color: "#F5C518" }}><strong>Rating:</strong> {movie.rating} 🌟 </h5>
            <h5 className="card-text" style={{ color: "#F5C518" }}><strong>Review:</strong> {movie.review}</h5>
          </div>
        </div>
      ) : (
        <p style={{ color: "#F5C518" }}>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
