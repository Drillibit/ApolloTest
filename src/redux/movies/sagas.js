import { put, call, takeLatest } from 'redux-saga/effects';

import * as CONSTANTS from './constants';
import { setMovies } from './actions';
import { requestNowPlayingMovies } from './requests';

function* fetchNowPlaying() {
  const { data } = yield call(requestNowPlayingMovies);
  if (data && data.results) {
    yield put(setMovies(data.results));
  }
}

export function* sagas() {
  yield takeLatest(CONSTANTS.FETCH_NOW_PLAYING, fetchNowPlaying);
}
