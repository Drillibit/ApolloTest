import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleFavourite } from '../redux/movies/actions';
import { Preview } from '../components/UIKit/Preview';

const mapMovieProps = movie => ({
  id: movie.id,
  voteAverage: movie.vote_average,
  voteCount: movie.vote_count,
  description: movie.overview,
  title: movie.title,
  year: movie.release_date,
  bg: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
  duration: movie.duration,
  pg: movie.pg,
  genre: movie.genre,
  cast: movie.cast,
  isFavourite: true,
});

const mapStateToProps = ({ movies: { byId } }, { id }) => (
  mapMovieProps(byId[id])
);

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleFavourite
}, dispatch);

export const ConnectedPreview = connect(mapStateToProps, mapDispatchToProps)(Preview);
