export const movieFieldsMap = {
  vote_average: 'voteAverage',
  vote_count: 'voteCount',
  overview: 'decription',
  release_date: 'year',
};

export const remapMovieFields = movie =>
  Object.keys(movie).reduce((newFields, field) => {
    const newField = movieFieldsMap[field] || field;
    return { ...newFields, [newField]: movie[field] };
  }, {});
