import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { remapMovieFields } from '../services/helpers';
import { toggleFavourite } from '../redux/movies/actions';
import { Preview } from '../components/UIKit/Preview';

const mapStateToProps = ({ movies: { byId } }, { id }) => (
  remapMovieFields(byId[id])
);

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleFavourite
}, dispatch);

export const ConnectedPreview = connect(mapStateToProps, mapDispatchToProps)(Preview);
