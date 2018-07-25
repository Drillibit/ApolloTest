import { put, call, takeEvery } from 'redux-saga/effects';

import {
  searchFilm,
  searchFilmError,
  searchFilmSuccess
} from '../actions/actions';
import { constants as C } from '../actions/constants';

import { Requester } from './requester';

function* fetchFilmAsync({ text }) {
  try {
    const { data } = yield call(Requester, 'search/movie', { params: { query: text } });
    yield put(searchFilm(text));
    yield put(searchFilmSuccess(data));
  } catch (error) {
    yield put(searchFilmError());
  }
}

export function* filmsSaga() {
  yield takeEvery(C.FETCHED_FILM, fetchFilmAsync);
}
