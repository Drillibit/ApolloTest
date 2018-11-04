const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    movie(id: ID!): movie
    similar: [SimilarType]
    video: [VideoType]
  }
  
  type BelongsToCollection {
    id: Int
    name: String
    poster_path: String
    backdrop_path: String
  }

  type MovieIdType {
    _id: ID
  }

  type CompaniesType {
    id: ID
    name: String
    logo_path: String
    original_country: String
  }

  type CountriesType {
    name: String
  }

  type SimilarType {
    adult: Boolean
    genre_ids: [ID]
    id: ID
    backdrop_path: String
    overview: String
    popularity: Int
    poster_path: String
    release_date: String
    runtime: String
    title: String
    vote_average: Float
    vote_count: Int
  }

  type VideoType {
    id: ID
    key: String
    name: String
  }

  type movie {
    _id: ID
    id: ID
    adult: Boolean
    runtime: String
    backdrop_path: String
    belongs_to_collection: BelongsToCollection
    budget: Int
    overview: String
    popularity: Int
    poster_path: String
    production_companies: [CompaniesType]
    production_countries: [CountriesType]
    genres: [GenreType]
    release_date: String
    tagline: String
    title: String
    vote_average: Float
    vote_count: Int
    similar: [SimilarType]
    video: VideoType
  }
`;
