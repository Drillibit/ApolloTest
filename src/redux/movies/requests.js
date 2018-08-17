import { api } from '../../services/api';

export const requestNowPlayingMovies = () => api.get('movie/now_playing');

export const requestTop100 = () => api.get('movie/top_rated');

export const requestMovieByKeywords = req => api.get(`search/keyword?query=${req}`);
