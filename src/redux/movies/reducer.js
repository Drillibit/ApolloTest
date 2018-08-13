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

const setMovieByKeyword = (state, { searchResults }) => ({
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

const handlers = {
  [TYPES.SET_MOVIES]: setMovies,
  [TYPES.SET_MOVIES_BY_KEYWORD]: setMovieByKeyword,
  [TYPES.CLEAR_ERROR]: clearError,
  [TYPES.SET_ERROR]: setError,
};

export const reducer = createReducer(initState, handlers);
