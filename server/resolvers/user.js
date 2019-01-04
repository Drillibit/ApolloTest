const User = require('../models/user');
const pubSub = require('../subscriptions/index');
const AuthService = require('../services/auth');

const ADDED_FAVOURITE = 'ADDED_FAVOURITE';
const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const IS_ONLINE = 'IS_ONLINE';

const UserResolver = {
  Query: {
    CurrentUser: (_, args, req) => req.user,
    GetFriend: async (_, { userId }) => User.findById(userId),
    GetAllFriends: async (_, { userId }) => {
      const { friends } = await User.findById(userId);
      return friends;
    }
  },
  Subscription: {
    isOnline: {
      subscribe: () => pubSub.asyncIterator([IS_ONLINE])
    },
    addFavourite: {
      subscribe: () => pubSub.asyncIterator([ADDED_FAVOURITE])
    },
    addRemoveFriend: {
      subscribe: () => pubSub.asyncIterator([ADD_FRIEND, DELETE_FRIEND])
    }
  },
  Mutation: {
    isOnline: async (_, { userId, online }) => {
      const user = await User.findById(userId);
      if (online) {
        return pubSub.publish(IS_ONLINE, { ...user, isOnline: true });
      }
      return pubSub.publish(IS_ONLINE, { ...user, isOnline: false });
    },
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
    },
    addRemoveFriend: async (_, { userId, friendId, inFriends }) => {
      const user = await User.findById(userId);
      if (inFriends) {
        user.friends.id(friendId).remove();
        pubSub.publish(DELETE_FRIEND, {
          addRemoveFriend: user
        });

        return user.save();
      }
      const friend = {
        _id: friendId
      };
      user.friends.push(friend);
      pubSub.publish(ADD_FRIEND, {
        addRemoveFriend: user
      });

      return user.save();
    }
  }
};

module.exports = UserResolver;
