import { constants as C } from '../actions/constants';
import { initialState } from './initialState';

/*
export default function createReducer(initialState, handlers) {
  return (state = initialState, action) => {
    const handler = handlers[action.type];
    if (!handler) {
      return state;
    }
    return handler({ ...state }, { ...action.payload });
  };
}
*/

export function films(state = initialState, action) {
  switch (action.type) {
    case C.SEARCHED_FILM:
      return Object.assign({},
        {
          filmsList: state.filmsList,
          loading: false,
          error: false
        }
      );
    case C.SEARCH_FILM_SUCCEDED:
      return Object.assign({},
        {
          filmsList: action.films,
          loading: false,
          error: false
        }
      );
    case C.SEARCH_FILM_FAILED:
      return Object.assign({},
        {
          filmsList: state.filmsList,
          loading: false,
          error: true
        }
      );
    default:
      return state;
  }
}
