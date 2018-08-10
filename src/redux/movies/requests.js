import { api } from '../../services/api';

export const requestNowPlayingMovies = () => api.get('movie/now_playing');
