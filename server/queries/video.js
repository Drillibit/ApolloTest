const graphql = require('graphql');
const api = require('../network/api');

const requestMovieVideos = require('../network/requestVideo');
const VideoType = require('../types/video');

const {
  GraphQLID
} = graphql;

const video = {
  type: VideoType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(_, args) {
    return requestMovieVideos(api, args);
  }
};

module.exports = video;
