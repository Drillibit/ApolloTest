const requestNowPlayingMovies = (api, {
  page, genre, sortBy, source
}) => {
  const current = new Date();
  const currentDate = current.toISOString().substring(0, 10);
  const d = new Date();
  d.setDate(d.getDate() - 30);
  const date = d.toISOString().substring(0, 10);
  console.log(currentDate, date);
  try {
    if (!source) {
      return api.get(`discover/movie?page=${page}&region=RU${sortBy ? `&sort_by=${sortBy}` : ''}${genre ? `&with_genres=${genre}` : ''}&release_date.gte=${date}&release_date.lte=${currentDate}&with_release_type=3%7C2`)
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
