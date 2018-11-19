const api = require('../network/api');
// const events = require('../subscriptions/index');
const { PubSub } = require('graphql-subscriptions');
const AuthService = require('../services/auth');
const requestGenres = require('../network/requestGenres');
const requestSimilarMovies = require('../network/requestSimilar');
const requestMovieVideos = require('../network/requestVideo');
const requestMovieByKeywords = require('../network/requestSearch');
const requestNowPlayingMovies = require('../network/requestNowPlayingMovies');
const User = require('../models/user');

const pubSub = new PubSub();

const NEW_MESSAGE = 'NEW_MESSAGE';

const resolvers = {
  Query: {
    CurrentUser: (_, args, req) => req.user,
    genres_arr: () => requestGenres(api),
    movie: (_, args) => api.get(`movie/${args.id}`).then(res => res.data),
    search: (_, args) => requestMovieByKeywords(api, args),
    tranding: (_, args) => requestNowPlayingMovies(api, args),
  },
  // Subscription: {
  //   addFavourite: {
  //     subscribe: () => pubSub.asyncIterator([NEW_MESSAGE])
  //   }
  // },
  Mutation: {
    signUp: (_, { email, password, name }, req) =>
      AuthService.signup({
        email, password, name, req
      }),
    logIn: (_, { email, password }, req) => AuthService.login({
      email, password, req
    }),
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
