import React from 'react';
import { Query } from 'react-apollo';
import { GET_MOVIE_EXTEND } from '../components/Requests/req';
import { Preloader } from '../components/UIKit/Preloader';

import { MoviePage } from '../components/MoviePage';

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
