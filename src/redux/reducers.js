import { combineReducers } from 'redux';

import { reducer as movies } from './movies/reducer';
import { reducer as genres } from './genres/reducer';
import { reducer as filters } from './filters/reducer';

export const reducers = combineReducers({
  movies,
  genres,
  filters
});
