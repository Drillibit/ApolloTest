import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Query } from 'react-apollo';
import { GET_MOVIE_EXTEND } from '../components/Requests/req';
import { Preloader } from '../components/UIKit/Preloader';


import {
  getMovieById,
  getVideo,
  getSimilar,
  isFavourite
} from '../redux/movies/selectors';
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

export const MoviePageContainer = props => (
  <Query query={GET_MOVIE_EXTEND} variables={{ id: props.match.params.id }}>
    {({ error, loading, data }) => {
      if (loading) return <Preloader>Загрузка</Preloader>;
      if (error) return `Error ${error.message}`;

      return (
        <MoviePage {...data.movie} {...props} />
      );
    }}
  </Query>
);

// export const MoviePageContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MoviePage);
