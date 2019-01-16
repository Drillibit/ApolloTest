const requestFetchGenres = api => api.get('genre/movie/list')
  .then(res => res.data.genres);

module.exports = requestFetchGenres;
