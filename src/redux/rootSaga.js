import { fork, all } from 'redux-saga/effects';

import { sagas as movies } from './movies/sagas';
import { sagas as genres } from './genres/sagas';

export function* rootSaga() {
  yield all([
    fork(movies),
    fork(genres),
  ]);
}
