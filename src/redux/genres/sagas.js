import { put, call, takeLatest } from 'redux-saga/effects';

import * as CONSTANTS from './constants';
import { setGenres } from './actions';
import { requestFetchGenres } from './requests';

function* fetchGenres() {
  const { data } = yield call(requestFetchGenres);
  if (data && data.genres) {
    yield put(setGenres(data.genres));
  }
}

export function* sagas() {
  yield takeLatest(CONSTANTS.FETCH_GENRES, fetchGenres);
}
