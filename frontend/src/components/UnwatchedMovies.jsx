import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const UnwatchedMovies = () => {
  const [artificialLoading, setArtificialLoading] = useState(true);

  const movieList = useSelector(state => state.movieList);
  const { movies, loading, error } = movieList;

  const unwatchedMovies = movies.filter(movie => !movie.watched);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArtificialLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mt-4" style={{ color: 'black' }}>
      <h1 style={{ textAlign: 'center', fontSize: '42px', fontFamily: 'Georgia, serif' }}>Unwatched Movies</h1>
      {loading || artificialLoading ? (
        <div className="row row-cols-1 row-cols-md-4">
          {Array(4).fill().map((_, index) => (
            <div key={index} className="col mb-4">
              <div className="card mb-3" style={{ borderRadius: '20px', backgroundColor: 'black', color: 'white' }}>
                <div className="card-body">
                  <h3 className="card-title"><Skeleton width={200} /></h3>
                  <p className="card-text"><Skeleton count={3} /></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="row row-cols-1 row-cols-md-4">
          {unwatchedMovies.map(movie => (
            <div key={movie._id} className="col mb-4">
              <MovieItem movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UnwatchedMovies;
