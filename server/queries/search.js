const graphql = require('graphql');
const SearchType = require('../types/search');
const api = require('../network/api');
const requestMovieByKeywords = require('../network/requestSearch');

const {
  GraphQLString
} = graphql;

const search = {
  type: SearchType,
  args: { req: { type: GraphQLString } },
  resolve(_, args) {
    return requestMovieByKeywords(api, args);
  }
};

module.exports = search;
