import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getMoviesByKeyWord } from '../redux/selectors/movieSelector';
import { fetchMoviesByKeyword } from '../redux/movies/actions';
import { HeaderParent } from '../components/MainHeader/MainHeader';

const mapStateToProps = state => ({
  list: getMoviesByKeyWord(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMoviesByKeyword
}, dispatch);

export const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(HeaderParent);
