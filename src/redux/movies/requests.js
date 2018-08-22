import { api } from '../../services/api';

export const requestNowPlayingMovies = page => {
  try {
    return api.get(`movie/now_playing?page=${page}`);
  } catch (e) {
    console.log(e);
  }
  return {};
};

export const requestTop100 = page => api.get(`movie/top_rated?page=${page}`);

export const requestMovieByKeywords = req => api.get(`search/keyword?query=${req}`);

export const requestByGenres = (genre, sort, page) => api.get(`discover/movie?sort_by=${sort}?page=${page}?with_genres=${genre}`);

/**
 * release_date.desc
 * popularity.desc
 * original_title.desc
 */
