const graphql = require('graphql');
const User = require('../models/user');
const UserType = require('../types/user');

const {
  GraphQLString,
} = graphql;

const addUser = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
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
