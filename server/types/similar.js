const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLID
} = graphql;

const SimilarTypeObj = new GraphQLObjectType({
  name: 'Similar',
  fields: () => ({
    adult: { type: GraphQLBoolean },
    genre_ids: {
      type: new GraphQLList(GraphQLID)
    },
    id: { type: GraphQLID },
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

module.exports = new GraphQLList(SimilarTypeObj);
