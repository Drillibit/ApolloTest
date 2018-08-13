import { put, call, takeLatest } from 'redux-saga/effects';

import * as CONSTANTS from './constants';
import { setMovies, setMoviesByKeyword, setError, clearError } from './actions';
import { requestNowPlayingMovies, requestMovieByKeywords } from './requests';

function* fetchNowPlaying() {
  const { data } = yield call(requestNowPlayingMovies);
  if (data && data.results) {
    yield put(setMovies(data.results));
  }
}

function* fetchMoviesByKeyword({ payload }) {
  try {
    const { data } = yield call(requestMovieByKeywords, payload);
    yield put(clearError());
    yield put(setMoviesByKeyword(data.results));
  } catch (error) {
    yield put(setError(error.response.statusText));
  }
}

export function* sagas() {
  yield takeLatest(CONSTANTS.FETCH_MOVIES_BY_KEYWORD, fetchMoviesByKeyword);
  yield takeLatest(CONSTANTS.FETCH_NOW_PLAYING, fetchNowPlaying);
}
