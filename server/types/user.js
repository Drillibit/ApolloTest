const graphql = require('graphql');
const GraphQLObjectId = require('graphql-scalar-objectid');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
} = graphql;

const MovieIdType = new GraphQLObjectType({
  name: 'MovieId',
  fields: () => ({
    _id: { type: GraphQLObjectId }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    image: { type: GraphQLString },
    favouriteMovies: { type: new GraphQLList(MovieIdType) }
  })
});

module.exports = UserType;
