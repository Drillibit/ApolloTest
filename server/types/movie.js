const graphql = require('graphql');
const api = require('../network/api');
const requestSimilarMovies = require('../network/requestSimilar');
const requestMovieVideos = require('../network/requestVideo');

const SimilarType = require('./similar');
const VideoType = require('./video');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLID
} = graphql;

const CountriesType = new GraphQLObjectType({
  name: 'ProductionCountries',
  fields: () => ({
    name: { type: GraphQLString }
  })
});

const CompaniesType = new GraphQLObjectType({
  name: 'ProductionCompanies',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    logo_path: { type: GraphQLString },
    original_country: { type: GraphQLString }
  })
});

const GenreType = new GraphQLObjectType({
  name: 'Genre',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

const BelongsToCollection = new GraphQLObjectType({
  name: 'BelongsToCollection',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    poster_path: { type: GraphQLString },
    backdrop_path: { type: GraphQLString }
  })
});

module.exports = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    adult: { type: GraphQLBoolean },
    runtime: { type: GraphQLString },
    backdrop_path: { type: GraphQLString },
    belongs_to_collection: { type: BelongsToCollection },
    budget: { type: GraphQLInt },
    overview: { type: GraphQLString },
    popularity: { type: GraphQLInt },
    poster_path: { type: GraphQLString },
    production_companies: {
      type: new GraphQLList(CompaniesType)
    },
    production_countries: {
      type: new GraphQLList(CountriesType)
    },
    genres: {
      type: new GraphQLList(GenreType)
    },
    release_date: { type: GraphQLString },
    tagline: { type: GraphQLString },
    title: { type: GraphQLString },
    vote_average: { type: GraphQLFloat },
    vote_count: { type: GraphQLInt },
    similar: {
      type: SimilarType,
      resolve(parentArg) {
        console.log(parentArg.id);
        return requestSimilarMovies(api, parentArg);
      }
    },
    video: {
      type: VideoType,
      resolve(parentArg) {
        return requestMovieVideos(api, parentArg);
      }
    }
  })
});
