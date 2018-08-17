export const getSearchResults = state =>
  state.movies.searchResults.map(({ id, title }) => ({ id, name: title }));

export const getMovieById = state => state.movies.movie;
