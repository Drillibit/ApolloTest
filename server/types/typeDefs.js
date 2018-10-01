const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type MovieIdType {
    _id: ID
  },
  type UserType {
    id: ID,
    name: String,
    email: String,
    password: String,
    image: String,
    favouriteMovies: [MovieIdType]
  },
  type GenreType {
    id: ID,
    name: String
  },
  type Query {
    hello: String,
    CurrentUser: UserType,
    genres_arr: [GenreType]
  },
  type Mutation {
    logIn(email: String!, password: String!): UserType
  }
`;

module.exports = typeDefs;
