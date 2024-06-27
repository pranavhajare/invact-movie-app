import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/actions/movieActions";
import "../App.css";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [genre, setGenre] = useState("");
  const [watched, setWatched] = useState(false);
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = {
      title,
      description,
      releaseYear,
      genre,
      watched,
      rating,
      review,
    };
    dispatch(addMovie(movie));
    setTitle("");
    setDescription("");
    setReleaseYear("");
    setGenre("");
    setWatched(false);
    setRating("");
    setReview("");
  };

  return (
    <div className="container mt-4" style={{ backgroundColor: "black" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Title:</label>
          <input
            type="text"
            className="form-control"
            style={{ backgroundColor: "#9FE2BH" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Release Year:</label>
          <input
            type="number"
            className="form-control"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <input
            type="text"
            className="form-control"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={watched}
            onChange={(e) => setWatched(e.target.checked)}
          />
          <label className="form-check-label">Watched</label>
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <input
            type="number"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label>Review:</label>
          <textarea
            className="form-control"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-warning">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
