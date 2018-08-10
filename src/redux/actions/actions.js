import { constants as C } from './constants';

export const searchFilm = text => ({
  type: C.SEARCHED_FILM,
  text
});

export const searchFilmSuccess = data => ({
  type: C.SEARCH_FILM_SUCCEDED,
  films: data.results
});

export const searchFilmError = () => ({
  type: C.SEARCH_FILM_FAILED
});

export const fetchFilm = text => ({
  type: C.FETCHED_FILM,
  text
});
