const graphql = require('graphql');
const User = require('../models/user');
const UserType = require('../types/user');

const {
  GraphQLNonNull,
  GraphQLID
} = graphql;

const removeFavourite = {
  type: UserType,
  args: {
    userId: { type: new GraphQLNonNull(GraphQLID) },
    favouriteId: { type: new GraphQLNonNull(GraphQLID) }
  },
  async resolve(_, { userId, favouriteId }) {
    const user = await User.findById(userId);
    user.favouriteMovies.id(favouriteId).remove();
    return user.save();
  }
};

module.exports = removeFavourite;
