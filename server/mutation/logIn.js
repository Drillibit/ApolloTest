const graphql = require('graphql');
const UserType = require('../types/user');
const AuthService = require('../services/auth');

const {
  GraphQLString,
  GraphQLNonNull
} = graphql;

const logIn = {
  type: UserType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(_, { email, password }, req) {
    return AuthService.login({
      email, password, req
    });
  }
};

module.exports = logIn;
