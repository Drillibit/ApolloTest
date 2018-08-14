import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getSearchResults } from '../redux/selectors';
import { searchMovies, clearSearch } from '../redux/movies/actions';
import { Header } from '../components/Header';

const mapStateToProps = state => ({
  result: getSearchResults(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  searchMovies,
  clearSearch
}, dispatch);

export const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
