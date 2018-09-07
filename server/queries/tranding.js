const graphql = require('graphql');
const TrandingType = require('../types/tranding');
const api = require('../network/api');
const requestNowPlayingMovies = require('../network/requestNowPlayingMovies');

const {
  GraphQLString
} = graphql;

const tranding = {
  type: TrandingType,
  args: {
    page: { type: GraphQLString },
    genre: { type: GraphQLString },
    sortBy: { type: GraphQLString }
  },
  resolve(_, args) {
    return requestNowPlayingMovies(api, args);
  }
};

module.exports = tranding;
