import { createReducer } from '../../services/createReducer';
import * as TYPES from './constants';

const initState = {
  error: '',
  list: [],
  listById: {},
  searchResults: [],
};

const setMovies = (state, { list }) => ({
  ...state,
  list: list.map(item => item.id),
  listById: list.reduce((acc, item) => ({ ...acc, [item.id]: { ...item } }), {})
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

const handlers = {
  [TYPES.SET_MOVIES]: setMovies,
  [TYPES.SET_SEARCH_RESULTS]: setSearchResults,
  [TYPES.CLEAR_SEARCH]: clearSearch,
  [TYPES.CLEAR_ERROR]: clearError,
  [TYPES.SET_ERROR]: setError,
};

export const reducer = createReducer(initState, handlers);
