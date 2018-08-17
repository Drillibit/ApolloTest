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
      bg: backdrop_path,
      description: overview,
      year: release_date,
      voteCount: vote_average,
      voteAverage: vote_count,
      id,
      title
    })
  );
