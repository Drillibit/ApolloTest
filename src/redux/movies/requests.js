import { api } from '../../services/api';

export const requestNowPlayingMovies = (page, genre, sortBy) => {
  try {
    return api.get(`movie/now_playing?page=${page}${sortBy ? `&sort_by=${sortBy}` : ''}${genre ? `&with_genres=${genre}` : ''}`);
  } catch (e) {
    console.log(e);
  }
  return {};
};

export const requestByGenres = (page, genre) => api.get(`discover/movie?page=${page}?with_genres=${genre}`);

export const requestMovie = id => api.get(`movie/${id}`);

export const requestMovieByKeywords = req =>
  api.get(`search/movie?query=${req}`);

export const requestMovieById = id => api.get(`movie/${id}`);

export const requestMovieVideos = id => api.get(`movie/${id}/videos`);

export const requestSimilarMovies = id => api.get(`movie/${id}/similar`);

export const requestTop100 = (page, genre, sortBy) =>
  api.get(`discover/movie?page=${page}&include_video=false&without_genres=99,10755&vote_count.gte=75&sort_by=${sortBy ? `${sortBy}` : 'vote_average.desc'}${genre ? `&with_genres=${genre}` : ''}`);

export const requestTrandingMovies = () => api.get('trending/movie/week');
