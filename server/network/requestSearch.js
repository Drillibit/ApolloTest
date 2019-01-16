const requestMovieByKeywords = (api, { req }) =>
  api.get(`search/movie?query=${encodeURIComponent(req)}`)
    .then(res => res.data.results)
    .catch(err => err);

module.exports = requestMovieByKeywords;
