const api = require('../network/api');
const AuthService = require('../services/auth');
const requestGenres = require('../network/requestGenres');
const requestSimilarMovies = require('../network/requestSimilar');
const requestMovieVideos = require('../network/requestVideo');
const requestMovieByKeywords = require('../network/requestSearch');
const requestNowPlayingMovies = require('../network/requestNowPlayingMovies');
const User = require('../models/user');

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    CurrentUser: (_, args, req) => req.user,
    genres_arr: () => requestGenres(api),
    movie: (_, args) => api.get(`movie/${args.id}`).then(res => res.data),
    search: (_, args) => requestMovieByKeywords(api, args),
    tranding: (_, args) => requestNowPlayingMovies(api, args),
  },
  Mutation: {
    logIn: (_, { email, password }, req) => {
      return AuthService.login({
        email, password, req
      });
    },
    logOut: (_, args, req) => {
      const { user } = req;
      req.logout();
      return user;
    },
    addFavourite: async (_, { userId, favouriteId, favourite }) => {
      const user = await User.findById(userId);
      if (favourite) {
        user.favouriteMovies.id(favouriteId).remove();
        return user.save();
      }

      const movie = {
        _id: favouriteId
      };

      user.favouriteMovies.push(movie);

      return user.save();
    }
  },
  movie: {
    video: parent => requestMovieVideos(api, parent),
    similar: parent => requestSimilarMovies(api, parent),
  },
};

module.exports = resolvers;
