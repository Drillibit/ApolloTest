const graphql = require('graphql');
const api = require('../network/api');
const requestNowPlayingMovies = require('../network/requestNowPlayingMovies');
const requestGenres = require('../network/requestGenres');

const User = require('../models/user');

const MovieType = require('../query/movie');
const TrandingType = require('../query/tranding');
const GenresType = require('../query/genres');
const UserType = require('../query/user');

const {
  GraphQLObjectType,
  GraphQLString,
  // GraphQLInt,
  // GraphQLList,
  // GraphQLFloat,
  // GraphQLBoolean,
  GraphQLSchema,
  GraphQLID
} = graphql;


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(_, args) {
        return api.get(`movie/${args.id}`).then(res => res.data);
      }
    },
    tranding: {
      type: TrandingType,
      args: {
        page: { type: GraphQLString },
        genre: { type: GraphQLString },
        sortBy: { type: GraphQLString }
      },
      resolve(_, args) {
        return requestNowPlayingMovies(api, args);
      }
    },
    genres_arr: {
      type: GenresType,
      resolve() {
        return requestGenres(api);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, { name, email, passowd }) {
        const user = new User({
          name,
          email,
          passowd
        });

        user.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
