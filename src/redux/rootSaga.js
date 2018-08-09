import { fork } from 'redux-saga/effects';

import { sagas as movies } from './movies/sagas';

export function* rootSaga() {
  yield fork(movies);
}
