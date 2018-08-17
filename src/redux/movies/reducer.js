import { createReducer } from '../../services/createReducer';
import * as TYPES from './constants';

const initState = {
  error: '',
  sorted: [],
  byId: {},
  searchResults: [],
  byList: []
};

const setMovies = (state, { list }) => ({
  ...state,
  sorted: list.map(item => item.id),
  byId: list.reduce((acc, item) => ({ ...acc, [item.id]: { ...item } }), {}),
  byList: list
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
