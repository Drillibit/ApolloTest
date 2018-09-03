const graphql = require('graphql');
const api = require('../network/api');
const MovieType = require('../query/movie');
const requestNowPlayingMovies = require('../network/requestNowPlayingMovies');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLSchema
} = graphql;

const GenreTypeIds = new GraphQLObjectType({
  name: 'GenreIds',
  fields: () => ({
    i: { type: GraphQLInt }
  })
});

const ResultType = new GraphQLObjectType({
  name: 'Results',
  fields: () => ({
    adult: { type: GraphQLBoolean },
    genre_ids: {
      type: new GraphQLList(GenreTypeIds)
    },
    id: { type: GraphQLString },
    backdrop_path: { type: GraphQLString },
    overview: { type: GraphQLString },
    popularity: { type: GraphQLInt },
    poster_path: { type: GraphQLString },
    release_date: { type: GraphQLString },
    title: { type: GraphQLString },
    vote_average: { type: GraphQLFloat },
    vote_count: { type: GraphQLInt }
  })
});

const TrandingType = new GraphQLObjectType({
  name: 'Tranding',
  fields: () => ({
    results: { type: new GraphQLList(ResultType) }
  })
});

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
