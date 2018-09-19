const graphql = require('graphql');
const api = require('../network/api');
const User = require('../models/user');
const UserType = require('../types/user');

const {
  GraphQLNonNull,
  GraphQLID
} = graphql;

const addFavourite = {
  type: UserType,
  args: {
    userId: { type: new GraphQLNonNull(GraphQLID) },
    favouriteId: { type: new GraphQLNonNull(GraphQLID) }
  },
  async resolve(_, { userId, favouriteId }) {
    const { data } = await api.get(`movie/${favouriteId}`);
    const user = await User.findById(userId);
    user.favouriteMovies = [...user.favouriteMovies, data];
    return user.save();
  }
};

module.exports = addFavourite;
