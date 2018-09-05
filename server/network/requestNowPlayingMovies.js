const requestNowPlayingMovies = (api, { page, genre, sortBy }) => {
  const d = new Date();
  d.setMonth(d.getDay() - 7);
  const date = d.toISOString().substring(0, 10);
  try {
    return api.get(`discover/movie?page=${page}${sortBy ? `&sort_by=${sortBy}` : ''}&release_date.gte=${date}${genre ? `&with_genres=${genre}` : ''}`)
      .then(res => res.data);
  } catch (e) {
    console.log(e);
  }
  return {};
};

module.exports = requestNowPlayingMovies;
