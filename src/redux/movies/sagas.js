import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';

import * as CONSTANTS from './constants';
import {
  setMovies,
  setSearchResults,
  setMovieById,
  setMovieVideo,
  setSimilarMovies,
  setError,
  clearError
} from './actions';
import {
  requestNowPlayingMovies,
  requestMovieByKeywords,
  requestMovieById,
  requestMovieVideos,
  requestSimilarMovies
} from './requests';

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
    const dataVid = yield call(requestMovieVideos, payload.id);
    const validVid =
      dataVid.data.results.length > 0
        ? dataVid.data.results[0].key
        : '2Z4m4lnjxkY';
    yield put(setMovieVideo(validVid));
    const dataSimilar = yield call(requestSimilarMovies, payload.id);
    console.log(dataSimilar.data.results.slice(0, 4));
    yield put(setSimilarMovies(dataSimilar.data.results.slice(0, 4)));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* sagas() {
  yield takeLatest(CONSTANTS.SEARCH_MOVIES, searchMovies);
  yield takeEvery(CONSTANTS.SEARCH_BY_ID, searchById);
  yield takeLatest(CONSTANTS.FETCH_NOW_PLAYING, fetchNowPlaying);
}
