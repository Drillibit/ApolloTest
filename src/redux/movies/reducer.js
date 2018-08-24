import { createReducer } from '../../services/createReducer';
import * as TYPES from './constants';

const initState = {
  error: '',
  sorted: [],
  movie: {},
  video: '',
  similar: [],
  searchResults: [],
  filmsList: [],
  byId: {},
  favourites: {
    351286: true, 363088: true, 353081: true, 299536: true, 260513: true, 442249: true,
  },
  pages: 0
};

/**
 * pages - это сколько фильмов содержится на сервере
 * 1 page запрос == 20 фильмам (2 - 40, 3 - 60 и т.д)
 * по умолчанию сделаем 1
 * далее мы будет использовать это значение в компоненте для того
 * чтобы понять что больше фильмов на сервере нет и нам необходимо
 * прекратить отправлять запросы и соответственно отображать фильмы
 * в компоненте
 */

const setMovies = (state, { list }) => ({
  ...state,
  sorted: list.map(item => item.id),
  byId: list.reduce((acc, item) => ({ ...acc, [item.id]: { ...item } }), {}),
  filmsList: list,
});

const setOneMovie = (state, { movie }) => ({
  ...state,
  movie
});

const addMovies = (state, { list, pages }) => ({
  ...state,
  filmsList: state.filmsList.concat(list),
  pages
});

const setSearchResults = (state, { searchResults }) => ({
  ...state,
  searchResults
});

const setError = (state, { error }) => ({
  ...state,
  error
});

const clearError = state => ({
  ...state,
  error: ''
});

const clearSearch = state => ({
  ...state,
  searchResults: [],
});

const setMovieById = (state, { movie }) => ({
  ...state,
  movie
});

const setMovieVideo = (state, { video }) => ({
  ...state,
  video
});

const setSimilarMovies = (state, { similar }) => ({
  ...state,
  similar
});

const toggleFavourite = ({ favourites, ...restState }, { id }) => ({
  ...restState,
  favourites: { ...favourites, [id]: !favourites[id] }

});

const handlers = {
  [TYPES.SET_MOVIES]: setMovies,
  [TYPES.ADD_MOVIES]: addMovies,
  [TYPES.SET_SEARCH_RESULTS]: setSearchResults,
  [TYPES.CLEAR_SEARCH]: clearSearch,
  [TYPES.SET_MOVIE_BY_ID]: setMovieById,
  [TYPES.SET_MOVIE_VIDEO]: setMovieVideo,
  [TYPES.SET_SIMILAR_MOVIES]: setSimilarMovies,
  [TYPES.CLEAR_ERROR]: clearError,
  [TYPES.SET_ERROR]: setError,
  [TYPES.SET_ONE_MOVIE]: setOneMovie,
  [TYPES.TOGGLE_FAVOURITE]: toggleFavourite,
};

export const reducer = createReducer(initState, handlers);
