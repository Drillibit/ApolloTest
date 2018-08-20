import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { remapMovieFields } from '../services/helpers';
import { toggleFavourite } from '../redux/movies/actions';
import { Preview } from '../components/UIKit/Preview';
import { CONFIG } from '../services/api';

const mapStateToProps = ({ movies: { byId } }, { id }) => ({
  ...remapMovieFields(byId[id]),
  bg: `${CONFIG.IMAGE_BASE}/w780/${byId[id].poster_path}`,
  isFavourite: true,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleFavourite
}, dispatch);

export const ConnectedPreview = connect(mapStateToProps, mapDispatchToProps)(Preview);
