import { api } from '../../services/api';

export const requestNowPlayingMovies = () => api.get('movie/now_playing');

export const requestMovieByKeywords = req => api.get(`search/movie?query=${req}`);

export const requestMovieById = id => api.get(`movie/${id}`);

export const requestMovieVideos = id => api.get(`movie/${id}/videos`);
