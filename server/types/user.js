const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    CurrentUser: UserType
    GetFriend(userId: ID!): UserType
    GetAllFriends(userId: ID!): [UserType]
  }
  extend type Subscription {
    addFavourite: UserType
    addRemoveFriend(userId: ID!, friendId: ID!): UserType
  }
  extend type Mutation {
    logIn(email: String!, password: String!): UserType
    logOut: UserType
    signUp(
      password: String!
      email: String!
      name: String!
      image: String!
    ): UserType
    addFavourite(userId: ID!, favouriteId: ID!, favourite: Boolean): UserType
    addRemoveFriend(userId: ID!, friendId: ID!, inFriends: Boolean!): UserType
  }

  type UserType {
    id: ID
    name: String
    email: String
    password: String
    image: String
    favouriteMovies: [MovieIdType]
    friends: [UserType]
  }
`;
