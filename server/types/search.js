const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    search(req: String): [SearchType]
  }
  type SearchType {
    id: ID
    title: String
  }
`;
