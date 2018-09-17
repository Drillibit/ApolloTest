const graphql = require('graphql');
const User = require('../models/user');
const UserType = require('../types/user');
const AuthService = require('../services/auth');

const {
  GraphQLString,
  GraphQLNonNull
} = graphql;

const addUser = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(_, { name, email, password }, req) {
    return AuthService.signup({ email, password, req });
  }
};

module.exports = addUser;
