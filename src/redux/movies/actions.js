import * as TYPES from './constants';

export const setMovies = list => ({
  type: TYPES.SET_MOVIES,
  payload: { list },
});

export const fetchNowPlaying = () => ({
  type: TYPES.FETCH_NOW_PLAYING,
});

export const fetchMoviesByKeyword = req => ({
  type: TYPES.FETCH_MOVIES_BY_KEYWORD,
  payload: req
});

export const setMoviesByKeyword = searchResults => ({
  type: TYPES.SET_MOVIES_BY_KEYWORD,
  payload: { searchResults }
});

export const setError = error => ({
  type: TYPES.SET_ERROR,
  payload: { error }
});

export const clearError = () => ({
  type: TYPES.CLEAR_ERROR,
});
