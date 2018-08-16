import { fork } from 'redux-saga/effects';

import { sagas as movies } from './movies/sagas';
import { sagas as genres } from './genres/sagas';

export function* rootSaga() {
  yield [
    fork(movies),
    fork(genres)
  ];
}
