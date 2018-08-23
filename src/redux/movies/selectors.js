export const getFavouriteMovies = list => Object.keys(list).filter(key => list[key]);
export const getSearchResults = state => state.movies.searchResults;

export const getSearchResultById = state => state.movies.byId;

export const getSearchNowPlaying = state => state.movies.searchNowPlaying;

export const getSearchTop100Results = state => state.movies.searchTop100Results;
