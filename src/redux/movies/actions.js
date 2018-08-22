import * as TYPES from './constants';

export const setMovies = list => ({
  type: TYPES.SET_MOVIES,
  payload: { list }
});

export const addMovies = list => ({
  type: TYPES.ADD_MOVIES,
  payload: { list }
});

export const fetchNowPlaying = page => ({
  type: TYPES.FETCH_NOW_PLAYING,
  payload: { page }
});

export const fetchTop100 = page => ({
  type: TYPES.FETCH_TOP_100,
  payload: { page }
});

export const fetchByGenres = (genre, sort, page) => ({
  type: TYPES.FETCH_BY_GENRES,
  payload: { genre, sort, page }
});

export const searchMovies = req => ({
  type: TYPES.SEARCH_MOVIES,
  payload: req
});

export const setSearchResults = searchResults => ({
  type: TYPES.SET_SEARCH_RESULTS,
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
