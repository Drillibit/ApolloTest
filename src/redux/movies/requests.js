import { api } from '../../services/api';

export const requestNowPlayingMovies = page => api.get(`movie/now_playing?page=${page}`);

export const requestTop100 = page => api.get(`movie/top_rated?page=${page}`);

export const requestMovieByKeywords = req => api.get(`search/keyword?query=${req}`);
