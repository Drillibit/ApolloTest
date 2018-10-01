const api = require('../network/api');
const AuthService = require('../services/auth');
const GenresType = require('../types/genres');
const requestGenres = require('../network/requestGenres');

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    CurrentUser: (_, args, req) => {
      return req.user;
    },
    genres_arr: () => {
      return requestGenres(api);
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
