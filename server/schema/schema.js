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
// Mutations
const addUser = require('../mutation/addUser');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie,
    user,
    tranding,
    genres_arr
  }
});
// 5b91e9c01066aa03ee2b3811
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
