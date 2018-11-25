const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    getMessage(_id: ID!): MessageType
    getAllMessages(_id: ID!): [MessageType]
  }
  extend type Mutation {
    sendMessage(owner: String!, receiver: String!, body: String!): MessageType
    deleteMessage(_id: ID!): MessageType
  }
  extend type Subscription {
    messageSent(receiver: String!, owner: String!): MessageType
  }
  type MessageType {
    owner: String
    receiver: String
    date: String
    body: String
  }
`;
