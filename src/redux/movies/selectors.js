export const getSearchResults = state =>
  state.movies.searchResults.map(({ id, title }) => ({ id, name: title }));

export const getMovieById = state => state.movies.movie;

export const getVideo = state => state.movies.video;
