const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} = graphql;

const GenreType = new GraphQLObjectType({
  name: 'Genres',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

module.exports = new GraphQLList(GenreType);

