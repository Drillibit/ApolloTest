import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getMoviesByKeyword } from '../redux/selectors/movieSelector';
import { fetchMoviesByKeyword, clearSearch } from '../redux/movies/actions';
import { HeaderParent } from '../components/MainHeader/MainHeader';

const mapStateToProps = state => ({
  result: getMoviesByKeyword(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMoviesByKeyword,
  clearSearch
}, dispatch);

export const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(HeaderParent);
