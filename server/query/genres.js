const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = graphql;

const GenresType = new GraphQLList({
  name: 'Genres',
  fields: () => ({
    genres: {
      name: 'Genre',
      type: new GraphQLObjectType({
        fields: () => ({
          id: { type: GraphQLInt },
          name: { type: GraphQLString }
        })
      })
    }
  })
});

module.exports = GenresType;
