import { put, call, takeLatest } from 'redux-saga/effects';

import * as CONSTANTS from './constants';
import { setMovies, setSearchResults, setMovieById, setError, clearError } from './actions';
import { requestNowPlayingMovies, requestMovieByKeywords, requestMovieById } from './requests';

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

function* searchById({ payload }) {
  try {
    const { data } = yield call(requestMovieById, payload.id);
    yield put(clearError());
    yield put(setMovieById(data));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* sagas() {
  yield takeLatest(CONSTANTS.SEARCH_MOVIES, searchMovies);
  yield takeLatest(CONSTANTS.SEARCH_BY_ID, searchById);
  yield takeLatest(CONSTANTS.FETCH_NOW_PLAYING, fetchNowPlaying);
}
