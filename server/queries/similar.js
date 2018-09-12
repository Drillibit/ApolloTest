const graphql = require('graphql');
const SimilarType = require('../types/similar');
const api = require('../network/api');
const requestSimilarMovies = require('../network/requestSimilar');

const {
  GraphQLID
} = graphql;

const similar = {
  type: SimilarType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(_, args) {
    return requestSimilarMovies(api, args);
  }
};

module.exports = similar;
