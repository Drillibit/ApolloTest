const api = require('../network/api');
const requestGenres = require('../network/requestGenres');
const requestSimilarMovies = require('../network/requestSimilar');
const requestMovieVideos = require('../network/requestVideo');
const requestMovieByKeywords = require('../network/requestSearch');
const requestNowPlayingMovies = require('../network/requestNowPlayingMovies');

const MovieResolver = {
  Query: {
    genres_arr: () => requestGenres(api),
    movie: (_, args) => api.get(`movie/${args.id}`).then(res => res.data),
    search: (_, args) => requestMovieByKeywords(api, args),
    tranding: (_, args) => requestNowPlayingMovies(api, args)
  },
  movie: {
    video: parent => requestMovieVideos(api, parent),
    similar: parent => requestSimilarMovies(api, parent)
  }
};

module.exports = MovieResolver;
