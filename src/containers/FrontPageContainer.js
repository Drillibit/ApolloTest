import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getState, getGenres } from '../redux/movies/selectors';
import * as actions from '../redux/movies/actions';
import * as filters from '../redux/filters/actions';
import * as genresActions from '../redux/genres/actions';
import { FrontPage } from '../components/FrontPage';
import { getFilters } from '../redux/filters/selectors';

const mapStateToProps = state => ({
  store: getState(state),
  genres: getGenres(state.genres),
  filters: getFilters(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...filters,
  ...actions,
  ...genresActions
}, dispatch);

export const FrontPageContainer = connect(mapStateToProps, mapDispatchToProps)(FrontPage);
