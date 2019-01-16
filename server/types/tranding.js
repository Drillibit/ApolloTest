const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    tranding(
      page: String!
      genre: String
      sortBy: String
      source: Boolean
    ): TrandingType
  }
  type ResultType {
    adult: Boolean
    genre_ids: [ID]
    id: ID
    backdrop_path: String
    overview: String
    popularity: Int
    poster_path: String
    release_date: String
    title: String
    vote_average: Float
    vote_count: Int
  }
  type TrandingType {
    page: Int
    results: [ResultType]
  }
`;
