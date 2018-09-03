const graphql = require('graphql');
const api = require('../network/api');
const MovieType = require('../query/movie');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
      resolve(_, args) {
        return api.get(`movie/${args.id}`).then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
