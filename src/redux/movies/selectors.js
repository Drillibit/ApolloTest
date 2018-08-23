export const getSearchResults = state =>
  state.movies.searchResults.map(({ id, title }) => ({ id, name: title }));

export const getMovieById = state => state.movies.movie;

export const getVideo = state => state.movies.video;

export const getSimilar = state =>
  state.movies.similar.map(
    ({
      backdrop_path,
      id,
      title,
      overview,
      release_date,
      vote_average,
      vote_count
    }) => ({
      bg: `https://image.tmdb.org/t/p/original${backdrop_path}`,
      description: overview,
      year: release_date,
      voteAverage: vote_average,
      voteCount: vote_count,
      id,
      title
    })
  );

export const getFavouriteMovies = list => Object.keys(list).filter(key => list[key]);

export const getSearchResultById = state => state.movies.byId;

export const getSearchNowPlaying = state => state.movies.searchNowPlaying;

export const getSearchTop100Results = state => state.movies.searchTop100Results;
