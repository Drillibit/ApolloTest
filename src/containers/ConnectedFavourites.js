import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchNowPlaying } from '../redux/movies/actions';
import { Favourites } from '../components/Favourites';
import { getFavouritesMovies } from '../redux/movies/selectors';

const mapStateToProps = ({ movies }) => ({
  listById: movies.listById,
  favourites: getFavouritesMovies(movies.favourites),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNowPlaying
}, dispatch);

export const ConnectedFavourites = connect(mapStateToProps, mapDispatchToProps)(Favourites);
