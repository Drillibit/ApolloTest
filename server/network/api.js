const axios = require('axios');

const CONFIG = {
  BASE_URL: 'https://api.themoviedb.org',
  KEY: '4493befd452f5d5eeea5c9d2de1306a8',
  VERSION: 3,
  IMAGE_BASE: 'https://image.tmdb.org/t/p'
};

module.exports.api = axios.create({
  baseURL: `${CONFIG.BASE_URL}/${CONFIG.VERSION}`,
  timeout: 2000,
  params: {
    api_key: CONFIG.KEY,
    language: 'ru-RU'
  }
});
