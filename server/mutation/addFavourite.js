const graphql = require('graphql');
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
  resolve(_, { userId, favouriteId }) {
    User.findById(userId)
      .then((user) => {
        user.favouriteMovies = [...user.favouriteMovies, favouriteId];
        return user.save();
      });
  }
};

module.exports = addFavourite;
