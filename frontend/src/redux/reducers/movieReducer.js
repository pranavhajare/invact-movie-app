import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_ADD_SUCCESS,
  MOVIE_DELETE_SUCCESS,
  MOVIE_UPDATE_SUCCESS,
} from '../types';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return { ...state, loading: true };
    case MOVIE_LIST_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case MOVIE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case MOVIE_ADD_SUCCESS:
      return { ...state, movies: [...state.movies, action.payload] };
    case MOVIE_DELETE_SUCCESS:
      return { ...state, movies: state.movies.filter(movie => movie._id !== action.payload) };
    case MOVIE_UPDATE_SUCCESS:
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie._id === action.payload._id ? action.payload : movie
        ),
      };
    default:
      return state;
  }
};
