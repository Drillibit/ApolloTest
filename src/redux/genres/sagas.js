import { put, call } from 'redux-saga/effects';

import { setGenres } from './actions';
import { requestFetchGenres } from './requests';

export function* fetchGenres() {
  const { data } = yield call(requestFetchGenres);
  if (data && data.genres) {
    yield put(setGenres(data.genres));
  }
}

