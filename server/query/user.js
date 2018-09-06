const graphql = require('graphql');
const MovieType = require('./movie');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    favouriteMovies: { type: new GraphQLList(MovieType) }
  })
});

module.exports = UserType;
