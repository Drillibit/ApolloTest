import axios from 'axios';

// PAGE по дефолту всегда равна 1, я добавлю ее в наш апи для того чтобы
// мы могли получать больше фильмов, количество которых равно 20
// и чтобы получить следующие 20 фильмов необходимо увеличивать Page
export const CONFIG = {
  BASE_URL: 'https://api.themoviedb.org',
  KEY: '4493befd452f5d5eeea5c9d2de1306a8',
  VERSION: 3,
  IMAGE_BASE: 'https://image.tmdb.org/t/p',
};

export const api = axios.create({
  baseURL: `${CONFIG.BASE_URL}/${CONFIG.VERSION}`,
  timeout: 1000,
  params: {
    api_key: CONFIG.KEY,
    page: ''
  },
});
