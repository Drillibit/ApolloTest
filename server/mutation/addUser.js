const graphql = require('graphql');
const User = require('../models/user');
const UserType = require('../types/user');

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
  resolve(_, { name, email, passowd }) {
    const user = new User({
      name,
      email,
      passowd
    });

    return user.save();
  }
};

module.exports = addUser;
