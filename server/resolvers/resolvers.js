const api = require('../network/api');
const AuthService = require('../services/auth');
const requestGenres = require('../network/requestGenres');
const requestSimilarMovies = require('../network/requestSimilar');
const requestMovieVideos = require('../network/requestVideo');

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
    similar: (parent) => {
      console.log('lel');
      return requestSimilarMovies(api, parent);
    }
  },
  Mutation: {
    logIn: (_, { email, password }, req) => {
      return AuthService.login({
        email, password, req
      });
    }
  }
};

module.exports = resolvers;
