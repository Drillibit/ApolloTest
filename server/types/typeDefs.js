const { gql } = require('apollo-server-express');
const UserType = require('./user');
const MovieType = require('./movie');
const TrandingType = require('./tranding');
const SearchType = require('./search');
const GenreType = require('./genre');
const MessageType = require('./message');

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

module.exports = [
  linkSchema,
  UserType,
  MovieType,
  TrandingType,
  SearchType,
  GenreType,
  MessageType
];
