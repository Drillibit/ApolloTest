const graphql = require('graphql');
const User = require('../models/user');

const UserType = require('../types/user');

const {
  GraphQLID
} = graphql;

const user = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve(_, { id }) {
    return User.findById(id);
  }
};

module.exports = user;
