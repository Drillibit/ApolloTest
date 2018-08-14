import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchNowPlaying } from '../redux/movies/actions';
import { Favourites } from '../components/Favourites';

const mapStateToProps = ({ movies }) => ({
  list: movies.list,
  listById: movies.listById,
  favourites: movies.favourites,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNowPlaying
}, dispatch);

export const ConnectedFavourites = connect(mapStateToProps, mapDispatchToProps)(Favourites);
