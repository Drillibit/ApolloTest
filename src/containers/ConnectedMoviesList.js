import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchNowPlaying } from '../redux/movies/actions';
import { MoviesList } from '../components/MoviesList';

const mapStateToProps = ({ movies }) => ({
  list: movies.list,
  listById: movies.listById,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNowPlaying
}, dispatch);

export const ConnectedMoviesList = connect(mapStateToProps, mapDispatchToProps)(MoviesList);
