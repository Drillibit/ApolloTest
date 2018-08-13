import { createReducer } from '../../services/createReducer';
import * as TYPES from './constants';

const initState = {
  list: [],
  listById: {},
};

const setMovies = (state, { list }) => ({
  ...state,
  list: list.map(item => item.id),
  listById: list.reduce((acc, item) => ({ ...acc, [item.id]: { ...item } }), {})
});

const handlers = {
  [TYPES.SET_MOVIES]: setMovies,
};

export const reducer = createReducer(initState, handlers);
