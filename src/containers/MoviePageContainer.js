import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovieById, getVideo, getSimilar, isFavourite } from '../redux/movies/selectors';
import { searchById, toggleFavourite } from '../redux/movies/actions';
import { MoviePage } from '../components/MoviePage';

const mapStateToProps = state => ({
  movie: getMovieById(state),
  video: getVideo(state),
  similar: getSimilar(state),
  favourite: isFavourite(state.movies.favourites, getMovieById(state)),
  favourites: state.movies.favourites
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchById,
      toggleFavourite
    },
    dispatch
  );

export const MoviePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePage);
