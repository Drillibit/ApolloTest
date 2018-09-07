const graphql = require('graphql');
const api = require('../network/api');

const MovieType = require('../types/movie');

const {
  GraphQLID
} = graphql;

const movie = {
  type: MovieType,
  args: { id: { type: GraphQLID } },
  resolve(_, args) {
    return api.get(`movie/${args.id}`).then(res => res.data);
  }
};

module.exports = movie;
