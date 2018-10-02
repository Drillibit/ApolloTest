const { gql } = require('apollo-server-express');
const UserType = require('./user');

const typeDefs = gql`
  type MovieIdType {
    _id: ID
  },
  type UserType {
    ${UserType}
  },
  type GenreType {
    id: ID,
    name: String
  },
  type BelongsToCollection {
    id: Int,
    name: String,
    poster_path: String,
    backdrop_path: String
  },
  type CompaniesType {
    id: ID,
    name: String,
    logo_path: String,
    original_country: String
  },
  type CountriesType {
    name: String
  },
  type SimilarType {
    adult: Boolean,
    genre_ids: [ID],
    id: ID,
    backdrop_path: String,
    overview: String,
    popularity: Int,
    poster_path: String,
    release_date: String,
    runtime: String,
    title: String,
    vote_average: Float,
    vote_count: Int
  },
  type VideoType {
    id: ID,
    key: String,
    name: String
  },
  type ResultType {
    adult: Boolean,
    genre_ids: [ID],
    id: ID,
    backdrop_path: String,
    overview: String,
    popularity: Int,
    poster_path: String,
    release_date: String,
    title: String,
    vote_average: Float,
    vote_count: Int
  },
  type TrandingType {
    page: Int,
    results: [ResultType]
  },
  type movie {
    _id: ID,
    id: ID,
    adult: Boolean,
    runtime: String,
    backdrop_path: String,
    belongs_to_collection: BelongsToCollection,
    budget: Int,
    overview: String,
    popularity: Int,
    poster_path: String,
    production_companies: [CompaniesType],
    production_countries: [CountriesType],
    genres: [GenreType],
    release_date: String,
    tagline: String,
    title: String,
    vote_average: Float,
    vote_count: Int,
    similar: [SimilarType],
    video: VideoType
  },
  type SearchType {
    id: ID,
    title: String
  },
  type Query {
    hello: String,
    CurrentUser: UserType,
    genres_arr: [GenreType],
    movie(id: ID!): movie,
    similar: [SimilarType],
    video: [VideoType],
    search(req: String!): [SearchType],
    tranding(page: String!, genre: String, sortBy: String, source: Boolean): TrandingType
  },
  type Mutation {
    logIn(email: String!, password: String!): UserType,
    logOut: UserType
  }
`;

module.exports = typeDefs;
