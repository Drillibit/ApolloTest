import { createReducer } from '../../services/createReducer';
import * as TYPES from './constants';

const initState = {
  list: [],
  listById: {},
  favourites: {
    351286: true, 363088: true, 353081: true, 299536: true, 260513: true, 442249: true,
  },
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
