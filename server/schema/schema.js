const graphql = require('graphql');
const api = require('../network/api');
const requestNowPlayingMovies = require('../network/requestNowPlayingMovies');

const MovieType = require('../query/movie');
const TrandingType = require('../query/tranding');

const {
  GraphQLObjectType,
  GraphQLString,
  // GraphQLInt,
  // GraphQLList,
  // GraphQLFloat,
  // GraphQLBoolean,
  GraphQLSchema,
  // GraphQLID
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
    },
    tranding: {
      type: TrandingType,
      args: {
        page: { type: GraphQLString },
      },
      resolve(_, args) {
        return requestNowPlayingMovies(api, args.page);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
