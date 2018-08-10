import * as TYPES from './constants';

export const setMovies = list => ({
  type: TYPES.SET_MOVIES,
  payload: { list },
});

export const fetchNowPlaying = () => ({
  type: TYPES.FETCH_NOW_PLAYING,
});
