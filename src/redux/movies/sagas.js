import { put, call, takeLatest } from 'redux-saga/effects';

import * as CONSTANTS from './constants';
import { setMovies, setSearchResults, setError, clearError, addMovies } from './actions';
import { requestNowPlayingMovies, requestMovieByKeywords, requestTop100 } from './requests';

function* fetchNowPlaying({ payload }) {
  const { page } = payload;
  const { data } = yield call(requestNowPlayingMovies, page);
  if (data && data.results) {
    if (page) {
      yield put(addMovies(data.results));
    } else {
      yield put(setMovies(data.results));
    }
  }
}

function* fetchTop100({ payload }) {
  const { page } = payload;
  const { data } = yield call(requestTop100, page);
  if (data && data.results) {
    if (page) {
      yield put(addMovies(data.results));
    } else {
      yield put(setMovies(data.results));
    }
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
  yield takeLatest(CONSTANTS.FETCH_TOP_100, fetchTop100);
  yield takeLatest(CONSTANTS.FETCH_NOW_PLAYING, fetchNowPlaying);
}
