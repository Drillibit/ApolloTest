import { put, call, takeLatest } from 'redux-saga/effects';

import * as CONSTANTS from './constants';
import { setMovies, setSearchResults, setError, clearError } from './actions';
import { requestNowPlayingMovies, requestMovieByKeywords } from './requests';

function* fetchNowPlaying() {
  const { data } = yield call(requestNowPlayingMovies);
  if (data && data.results) {
    yield put(setMovies(data.results));
  }
}

function* searchMovies({ payload }) {
  try {
    const { data } = yield call(requestMovieByKeywords, payload);
    yield put(clearError());
    yield put(setSearchResults(data.results));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* sagas() {
  yield takeLatest(CONSTANTS.SEARCH_MOVIES, searchMovies);
  yield takeLatest(CONSTANTS.FETCH_NOW_PLAYING, fetchNowPlaying);
}
