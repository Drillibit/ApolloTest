const api = require('../network/api');
const GenresType = require('../types/genres');
const requestGenres = require('../network/requestGenres');


const genres_arr = {
  type: GenresType,
  resolve() {
    return requestGenres(api);
  }
};

module.exports = genres_arr;
