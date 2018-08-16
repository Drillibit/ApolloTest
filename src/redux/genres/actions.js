import * as TYPES from './constants';

export const setGenres = list => ({
  type: TYPES.SET_GENRES,
  payload: { list },
});

export const fetchGenres = () => ({
  type: TYPES.FETCH_GENRES,
});
