import axios from 'axios';

export const CONFIG = {
  BASE_URL: 'https://api.themoviedb.org',
  KEY: '4493befd452f5d5eeea5c9d2de1306a8',
  VERSION: 3
};

export const api = axios.create({
  baseURL: `${CONFIG.BASE_URL}/${CONFIG.VERSION}`,
  timeout: 1000,
  params: {
    api_key: CONFIG.KEY
  },
});
