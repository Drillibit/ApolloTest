const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;

const UserType = require('../types/user');
// Queries
const user = require('../queries/user');
const movie = require('../queries/movie');
const tranding = require('../queries/tranding');
const genres_arr = require('../queries/genre');
const similar = require('../queries/similar');
const video = require('../queries/video');
const search = require('../queries/search');
// Mutations
const signUp = require('../mutation/signUp');
const logOut = require('../mutation/logOut');
const logIn = require('../mutation/logIn');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie,
    user,
    tranding,
    genres_arr,
    similar,
    video,
    search,
    currentUser: {
      type: UserType,
      resolve(_, args, req) {
        return req.user;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp,
    logOut,
    logIn
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
