import { createReducer } from '../../services/createReducer';
import * as TYPES from './constants';

const initState = {
  error: '',
  sorted: [],
  byId: {},
  searchResults: [],
  filmsList: [],
  movie: {}
  favourites: {
    351286: true, 363088: true, 353081: true, 299536: true, 260513: true, 442249: true,
  },
};

const setMovies = (state, { list }) => ({
  ...state,
  sorted: list.map(item => item.id),
  byId: list.reduce((acc, item) => ({ ...acc, [item.id]: { ...item } }), {}),
  filmsList: list,
});

const setOneMovie = (state, { movie }) => ({
  ...state,
  // random movie in next
  movie
});

const addMovies = (state, { list }) => {
  return {
    ...state,
    filmsList: state.filmsList.concat(list)
  };
};

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
  searchResults: [],
});

const toggleFavourite = ({ favourites, ...restState }, { id }) => ({
  ...restState,
  favourites: { ...favourites, [id]: !favourites[id] }
});

const handlers = {
  [TYPES.SET_MOVIES]: setMovies,
  [TYPES.ADD_MOVIES]: addMovies,
  [TYPES.SET_SEARCH_RESULTS]: setSearchResults,
  [TYPES.CLEAR_SEARCH]: clearSearch,
  [TYPES.CLEAR_ERROR]: clearError,
  [TYPES.SET_ERROR]: setError,
  [TYPES.SET_ONE_MOVIE]: setOneMovie,
  [TYPES.TOGGLE_FAVOURITE]: toggleFavourite,
};

export const reducer = createReducer(initState, handlers);
