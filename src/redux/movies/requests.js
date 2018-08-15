import { api } from '../../services/api';

export const requestNowPlayingMovies = () => api.get('movie/now_playing');

export const requestMovieByKeywords = req => api.get(`search/keyword?query=${req}`);

export const requestMovieById = id => api.get(`find/${id}`);
