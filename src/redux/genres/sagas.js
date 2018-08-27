import { take, put, call, select, takeLatest } from 'redux-saga/effects';

import * as CONSTANTS from './constants';
import { setGenres } from './actions';
import { requestFetchGenres } from './requests';
import { getGenres } from './selectors';

function* fetchGenres() {
  yield take('persist/REHYDRATE');
  const res = yield select(getGenres);
  if (res[12] === undefined) {
    console.log('call')
    const { data } = yield call(requestFetchGenres);
    if (data && data.genres) {
      yield put(setGenres(data.genres));
    }
  }
}

export function* sagas() {
  yield takeLatest(CONSTANTS.FETCH_GENRES, fetchGenres);
}
