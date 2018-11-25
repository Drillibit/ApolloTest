const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    genres_arr: [GenreType]
  }

  type GenreType {
    id: ID
    name: String
  }
`;
