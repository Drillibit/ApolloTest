export const getFavouritesMovies = list => Object.keys(list).filter(key => list[key]);
export const getSearchResults = state => state.movies.searchResults;
