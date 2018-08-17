import { api } from '../../services/api';

export const requestFetchGenres = () => api.get('genre/movie/list');
