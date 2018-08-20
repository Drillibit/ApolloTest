import { createReducer } from '../../services/createReducer';
import * as TYPES from './constants';

const initState = {
  error: '',
  sorted: [],
  movie: {},
  video: '',
  similar: [],
  searchResults: [],
  byId: {},
  favourites: {
    351286: true, 363088: true, 353081: true, 299536: true, 260513: true, 442249: true,
  },
};

const setMovies = (state, { list }) => ({
  ...state,
  sorted: list.map(item => item.id),
  byId: list.reduce((acc, item) => ({ ...acc, [item.id]: { ...item } }), {})
});

const setSearchResults = (state, { searchResults }) => ({
  ...state,
  searchResults
});

const setError = (state, { error }) => ({
  ...state,
  error
});

const clearError = state => ({
  ...state,
  error: ''
});

const clearSearch = state => ({
  ...state,
  searchResults: []
});

const setMovieById = (state, { movie }) => ({
  ...state,
  movie
});

const setMovieVideo = (state, { video }) => ({
  ...state,
  video
});

const setSimilarMovies = (state, { similar }) => ({
  ...state,
  similar
});

const toggleFavourite = ({ favourites, ...restState }, { id }) => ({
  ...restState,
  favourites: { ...favourites, [id]: !favourites[id] }

});

const handlers = {
  [TYPES.SET_MOVIES]: setMovies,
  [TYPES.SET_SEARCH_RESULTS]: setSearchResults,
  [TYPES.CLEAR_SEARCH]: clearSearch,
  [TYPES.SET_MOVIE_BY_ID]: setMovieById,
  [TYPES.SET_MOVIE_VIDEO]: setMovieVideo,
  [TYPES.SET_SIMILAR_MOVIES]: setSimilarMovies,
  [TYPES.CLEAR_ERROR]: clearError,
  [TYPES.SET_ERROR]: setError,
  [TYPES.TOGGLE_FAVOURITE]: toggleFavourite,
};

export const reducer = createReducer(initState, handlers);
