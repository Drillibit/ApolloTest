import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleFavourite } from '../redux/movies/actions';
import { Preview } from '../components/UIKit/Preview';

const mapStateToProps = (state, { id, voteAverage, voteCount, size, description, title, year, bg, duration, pg, genre, cast, isFavourite }) => ({
  id,
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
  toggleFavourite
}, dispatch);

export const ConnectedPreview = connect(mapStateToProps, mapDispatchToProps)(Preview);
