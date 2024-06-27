import axios from "axios";
import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_ADD_SUCCESS,
  MOVIE_DELETE_SUCCESS,
  MOVIE_UPDATE_SUCCESS,
} from "../types";

const api = axios.create({
  baseURL: "https://invact-movie-app-z7ap.onrender.com/api",
});

export const listMovies = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_LIST_REQUEST });
    const { data } = await api.get("/movies");
    dispatch({ type: MOVIE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIE_LIST_FAIL, payload: error.message });
    
  }
};

export const addMovie = (movie) => async (dispatch) => {
  try {
    const { data } = await api.post("/movies", movie);
    dispatch({ type: MOVIE_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIE_LIST_FAIL, payload: error.message });
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    await api.delete(`/movies/${id}`);
    dispatch({ type: MOVIE_DELETE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: MOVIE_LIST_FAIL, payload: error.message });
  }
};

// export const updateMovie = (id) => async (dispatch) => {
//   try {
//     await api.patch(`/movies/${id}`);
//     dispatch({ type: MOVIE_UPDATE_SUCCESS, payload: id });
//   } catch (error) {
//     dispatch({ type: MOVIE_LIST_FAIL, payload: error.message });
//   }
// };

export const updateMovie = (id, movie) => async (dispatch) => {
  try {
    const { data } = await api.patch(`/movies/${id}`, movie);
    dispatch({ type: MOVIE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIE_LIST_FAIL, payload: error.message });
  }
};
