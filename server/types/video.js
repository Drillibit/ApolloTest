const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const VideoType = new GraphQLObjectType({
  name: 'Video',
  fields: () => ({
    id: { type: GraphQLID },
    key: { type: GraphQLString },
    name: { type: GraphQLString }
  })
});

module.exports = VideoType;
