import * as TYPES from './constants';

export const activeGenre = genre => ({
  type: TYPES.ACTIVE_GENRE,
  payload: { genre }
});

export const activeSort = sort => ({
  type: TYPES.ACTIVE_SORT,
  payload: { sort }
});
