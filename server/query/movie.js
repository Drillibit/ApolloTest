const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
  GraphQLBoolean
} = graphql;

const CompaniesType = new GraphQLObjectType({
  name: 'ProductionCompanies',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    logo_path: { type: GraphQLString },
    original_country: { type: GraphQLString }
  }
});

const GenreType = new GraphQLObjectType({
  name: 'Genre',
  fields: () => ({
    id: { type: GraphQLInt },
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

module.exports.MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLString },
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
    genres: {
      type: new GraphQLList(GenreType)
    },
    release_date: { type: GraphQLString },
    tagline: { type: GraphQLString },
    title: { type: GraphQLString },
    vote_average: { type: GraphQLFloat },
    vote_count: { type: GraphQLInt }
  })
});
