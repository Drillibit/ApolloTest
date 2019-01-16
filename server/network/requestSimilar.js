const requestSimilarMovies = (api, { id }) => api.get(`movie/${id}/similar`)
  .then(res => res.data.results.slice(0, 4));

module.exports = requestSimilarMovies;
