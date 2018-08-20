import { createReducer } from '../../services/createReducer';
import * as TYPES from './constants';

const initState = {
  sorted: [],
  byId: {},
};

const setGenres = (state, { list }) => ({
  ...state,
  sorted: list.map(item => item.id),
  byId: list.reduce((acc, item) => ({ ...acc, [item.id]: { ...item } }), {})
});

const handlers = {
  [TYPES.SET_GENRES]: setGenres,
};

export const reducer = createReducer(initState, handlers);
