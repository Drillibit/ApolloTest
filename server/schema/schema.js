const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;
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

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie,
    user,
    tranding,
    genres_arr,
    similar,
    video,
    search
  }
});
// 5b91e9c01066aa03ee2b3811
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
