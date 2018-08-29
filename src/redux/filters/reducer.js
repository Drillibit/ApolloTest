import { createReducer } from '../../services/createReducer';
import * as TYPES from './constants';

const initState = {
  activeGenre: '',
  activeSort: '',
};

const activeGenre = (state, { genre }) => ({
  ...state,
  activeGenre: genre
});

const activeSort = (state, { sort }) => ({
  ...state,
  activeSort: sort
});

const clearFilter = state => ({
  ...state,
  activeGenre: '',
  activeSort: '',
});

const handlers = {
  [TYPES.ACTIVE_GENRE]: activeGenre,
  [TYPES.ACTIVE_SORT]: activeSort,
  [TYPES.CLEAR_FILTER]: clearFilter,
};

export const reducer = createReducer(initState, handlers);
