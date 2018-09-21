const graphql = require('graphql');
const api = require('../network/api');
const User = require('../models/user');
const UserType = require('../types/user');

const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} = graphql;

const addFavourite = {
  type: UserType,
  args: {
    userId: { type: new GraphQLNonNull(GraphQLID) },
    favouriteId: { type: new GraphQLNonNull(GraphQLID) },
    favourite: { type: new GraphQLNonNull(GraphQLBoolean) }
  },
  async resolve(_, { userId, favouriteId, favourite }) {
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
};

module.exports = addFavourite;
