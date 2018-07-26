import { constants as C } from '../actions/constants';
import { initialState } from './initialState';


export function films(state = initialState, action) {
  switch (action.type) {
    case C.SEARCHED_FILM:
      console.log('fetch');

      return {
        filmsList: state.filmsList,
        loading: false,
        error: false
      };

      // return Object.assign({},
      //   {
      //     filmsList: state.filmsList,
      //     loading: false,
      //     error: false
      //   }
      // );
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
