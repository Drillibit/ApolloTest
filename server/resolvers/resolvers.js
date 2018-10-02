const api = require('../network/api');
const AuthService = require('../services/auth');
const requestGenres = require('../network/requestGenres');
const requestSimilarMovies = require('../network/requestSimilar');
const requestMovieVideos = require('../network/requestVideo');
const requestMovieByKeywords = require('../network/requestSearch');

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    CurrentUser: (_, args, req) => {
      return req.user;
    },
    genres_arr: () => {
      return requestGenres(api);
    },
    movie: (_, args) => {
      return api.get(`movie/${args.id}`).then(res => res.data);
    },
    search: (_, args) => {
      return requestMovieByKeywords(api, args);
    }
  },
  Mutation: {
    logIn: (_, { email, password }, req) => {
      return AuthService.login({
        email, password, req
      });
    }
  },
  movie: {
    video: parent => requestMovieVideos(api, parent),
    similar: parent => requestSimilarMovies(api, parent),
  },
};

module.exports = resolvers;
