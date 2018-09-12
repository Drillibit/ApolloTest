const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} = graphql;

const SearchType = new GraphQLObjectType({
  name: 'SearchRes',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString }
  })
});

module.exports = new GraphQLList(SearchType);
