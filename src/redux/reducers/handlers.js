/*
export const constants = {
  SEARCHED_FILM: 'SEARCHED_FILM',
  SEARCH_FILM_SUCCEDED: 'SEARCH_FILM_SUCCEDED',
  SEARCH_FILM_FAILED: 'SEARCH_FILM_FAILED',
  FETCHED_FILM: 'FETCHED_FILM'
};

export default function createReducer(initialState, handlers) {
  return (state = initialState, action) => {
    const handler = handlers[action.type];
    if (!handler) {
      return state;
    }
    return handler({ ...state }, { ...action.payload });
  };
}

export default createReducer(initialState, {

  [REHYDRATE](state, { roles }) {
    return { ...state, ...roles, loading: false };
  },

  [TYPES.LOAD_ROLES](state) {
    state.loading = true;
    return state;
  },

  [TYPES.ADD_ROLE](state, payload) {
    state.list.push(payload.role);
    return state;
  },

  [TYPES.CLEAR_DATA]() {
    return initialState;
  }

});

export default function createReducer(initialState, handlers) {
  return (state = initialState, action) =>
    handlers[action.type]
    ? handlers[actions.type](state, action)
    : state;
*/

/*
import { constants as C } from '../actions/constants';

export const handlers = {
  {type: C.SEARCHED_FILM, payload: text},
  {type: C.SEARCH_FILM_SUCCEDED, payload: data},
  {type: C.SEARCH_FILM_FAILED},
  {type: C.FETCHED_FILM, payload: text}
};
*/
