import * as TYPES from './constants';

export const setMovies = list => ({
  type: TYPES.SET_MOVIES,
  payload: { list },
});

export const fetchNowPlaying = () => ({
  type: TYPES.FETCH_NOW_PLAYING,
});

export const fetchMoviesByKeyword = req => ({
  type: TYPES.FETCH_SEARCH_MOVIES,
  payload: req
});

export const setMoviesByKeyword = searchResults => ({
  type: TYPES.SET_SEARCH_RESULT,
  payload: { searchResults }
});

export const setError = error => ({
  type: TYPES.SET_ERROR,
  payload: { error }
});

export const clearError = () => ({
  type: TYPES.CLEAR_ERROR,
});

export const clearSearch = () => ({
  type: TYPES.CLEAR_SEARCH,
});
