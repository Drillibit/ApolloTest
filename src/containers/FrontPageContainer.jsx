import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { } from 'prop-types';

import { getSearchResultByList, getSearchResults, getSearchResultById } from '../redux/movies/selectors';
import * as actions from '../redux/movies/actions';
import { FrontPage } from '../components/FrontPage';

const mapStateToProps = state => ({
  searchResults: getSearchResultByList(state),
  genres: state.genres
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions
}, dispatch);

export const FrontPageContainer = connect(mapStateToProps, mapDispatchToProps)(FrontPage);
