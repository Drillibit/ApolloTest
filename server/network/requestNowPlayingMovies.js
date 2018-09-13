const requestNowPlayingMovies = (api, {
  page, genre, sortBy, source
}) => {
  const d = new Date();
  d.setDate(d.getDate() - 22);
  const date = d.toISOString().substring(0, 10);
  console.log(source, date);
  try {
    if (!source) {
      return api.get(`discover/movie?page=${page}${sortBy ? `&sort_by=${sortBy}` : ''}${genre ? `&with_genres=${genre}` : ''}&primary_release_date.gte=${date}`)
        .then(res => res.data);
    }
    return api.get(`discover/movie?page=${page}&include_video=false&without_genres=99,10755&vote_count.gte=75&sort_by=${sortBy ? `${sortBy}` : 'vote_average.desc'}${genre ? `&with_genres=${genre}` : ''}`)
      .then(res => res.data);
  } catch (e) {
    console.log(e);
  }
  return {};
};


module.exports = requestNowPlayingMovies;
