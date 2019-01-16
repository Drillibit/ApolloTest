const requestMovieVideos = (api, { id }) => api.get(`movie/${id}/videos`)
  .then(res => res.data.results[0] || []);

module.exports = requestMovieVideos;
