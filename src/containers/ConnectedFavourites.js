import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchNowPlaying } from '../redux/movies/actions';
import { Favourites } from '../components/Favourites';
import { getFavouriteMovies } from '../redux/movies/selectors';

const mapStateToProps = ({ movies }) => ({
  byId: movies.byId,
  favourites: getFavouriteMovies(movies.favourites),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNowPlaying,
}, dispatch);

export const ConnectedFavourites = connect(mapStateToProps, mapDispatchToProps)(Favourites);
