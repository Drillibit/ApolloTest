import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchById } from '../redux/movies/actions';
import { MoviePage } from '../components/MoviePage';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => bindActionCreators({
  searchById
}, dispatch);

export const MoviePageContainer = connect(mapStateToProps, mapDispatchToProps)(MoviePage);
