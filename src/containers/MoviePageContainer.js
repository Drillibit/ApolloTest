import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovieById } from '../redux/movies/selectors';
import { searchById } from '../redux/movies/actions';
import { MoviePage } from '../components/MoviePage';

const mapStateToProps = state => ({
  movie: getMovieById(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  searchById
}, dispatch);

export const MoviePageContainer = connect(mapStateToProps, mapDispatchToProps)(MoviePage);
