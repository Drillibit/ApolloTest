const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    CurrentUser: UserType
  }
  extend type Subscription {
    addFavourite: UserType
  }
  extend type Mutation {
    logIn(email: String!, password: String!): UserType
    addFavourite(userId: ID!, favouriteId: ID!, favourite: Boolean): UserType
    logOut: UserType
    signUp(password: String!, email: String!, name: String!, image: String!): UserType
  }
  
  type UserType {
    id: ID
    name: String
    email: String
    password: String
    image: String
    favouriteMovies: [MovieIdType]
  }
`;
