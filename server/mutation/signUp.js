const graphql = require('graphql');
const UserType = require('../types/user');
const AuthService = require('../services/auth');

const {
  GraphQLString,
  GraphQLNonNull
} = graphql;

const signUp = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLString }
  },
  resolve(_, {
    name,
    email,
    password,
    image
  }, req) {
    return AuthService.signup({
      image, name, email, password, req
    });
  }
};

module.exports = signUp;
