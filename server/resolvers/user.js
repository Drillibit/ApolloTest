const User = require('../models/user');
const pubSub = require('../subscriptions/index');
const AuthService = require('../services/auth');

const ADDED_FAVOURITE = 'ADDED_FAVOURITE';

const UserResolver = {
  Query: {
    CurrentUser: (_, args, req) => req.user
  },
  Subscription: {
    addFavourite: {
      subscribe: () => pubSub.asyncIterator([ADDED_FAVOURITE])
    }
  },
  Mutation: {
    signUp: (_, { email, password, name }, req) =>
      AuthService.signup({
        email,
        password,
        name,
        req
      }),
    logIn: (_, { email, password }, req) =>
      AuthService.login({
        email,
        password,
        req
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
        pubSub.publish(ADDED_FAVOURITE, {
          addFavourite: user
        });
        return user.save();
      }

      const movie = {
        _id: favouriteId
      };
      user.favouriteMovies.push(movie);
      pubSub.publish(ADDED_FAVOURITE, {
        addFavourite: user
      });

      return user.save();
    }
  }
};

module.exports = UserResolver;
