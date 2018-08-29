import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { } from 'prop-types';

import { getState, getGenres } from '../redux/movies/selectors';
import * as actions from '../redux/movies/actions';
import * as filters from '../redux/filters/actions';
import * as genresActions from '../redux/genres/actions';
import { FrontPage } from '../components/FrontPage';

const mapStateToProps = state => ({
  store: getState(state),
  genres: getGenres(state.genres),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...filters,
  ...actions,
  ...genresActions
}, dispatch);

export const FrontPageContainer = connect(mapStateToProps, mapDispatchToProps)(FrontPage);
