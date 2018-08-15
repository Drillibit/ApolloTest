import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleFavourites } from '../redux/movies/actions';
import { Preview } from '../components/UIKit/Preview';

const mapStateToProps = ({ voteAverage, voteCount, size, description, title, year, bg, duration, pg, genre, cast, isFavourite }) => ({
  voteAverage,
  voteCount,
  size,
  description,
  title,
  year,
  bg,
  duration,
  pg,
  genre,
  cast,
  isFavourite,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleFavourites
}, dispatch);

export const ConnectedFavourites = connect(mapStateToProps, mapDispatchToProps)(Preview);
