import * as TYPES from './constants';

export const setMovies = list => ({
  type: TYPES.SET_MOVIES,
  payload: { list }
});

export const fetchNowPlaying = () => ({
  type: TYPES.FETCH_NOW_PLAYING
});

export const searchMovies = req => ({
  type: TYPES.SEARCH_MOVIES,
  payload: req
});

export const setSearchResults = searchResults => ({
  type: TYPES.SET_SEARCH_RESULTS,
  payload: { searchResults }
});

export const searchById = id => ({
  type: TYPES.SEARCH_BY_ID,
  payload: { id }
});

export const setMovieById = movie => ({
  type: TYPES.SET_MOVIE_BY_ID,
  payload: { movie }
});

export const setMovieVideo = video => ({
  type: TYPES.SET_MOVIE_VIDEO,
  payload: { video }
});

export const setSimilarMovies = similar => ({
  type: TYPES.SET_SIMILAR_MOVIES,
  payload: { similar }
});

export const setError = error => ({
  type: TYPES.SET_ERROR,
  payload: { error }
});

export const clearError = () => ({
  type: TYPES.CLEAR_ERROR
});

export const clearSearch = () => ({
  type: TYPES.CLEAR_SEARCH
});

export const toggleFavourite = id => ({
  type: TYPES.TOGGLE_FAVOURITE,
  payload: { id },
});
