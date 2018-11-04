const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    CurrentUser: UserType
  }
  extend type Mutation {
    logIn(email: String!, password: String!): UserType
    addFavourite(userId: ID!, favouriteId: ID!, favourite: Boolean): UserType
    logOut: UserType
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
