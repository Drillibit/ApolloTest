import { combineReducers } from 'redux';

import { reducer as movies } from './movies/reducer';

export const reducers = combineReducers({
  movies
});
