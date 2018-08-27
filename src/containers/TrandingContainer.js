import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getState, getGenres } from '../redux/movies/selectors';
import * as actions from '../redux/movies/actions';
import * as genresActions from '../redux/genres/actions';
import { Tranding } from '../components/Tranding';

const mapStateToProps = state => ({
  store: getState(state),
  genres: getGenres(state.genres),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
  ...genresActions
}, dispatch);

export const TrandingContainer = connect(mapStateToProps, mapDispatchToProps)(Tranding);
