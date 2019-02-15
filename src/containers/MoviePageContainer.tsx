import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import { GET_MOVIE_EXTEND } from '../components/Requests/req';
import { Preloader } from '../components/UIKit/Preloader';

import { MoviePage } from '../components/MoviePage';

const StyledPreloderFront = styled.div`
  min-height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

type MoviePageContainerType = {
  match: {
    params: {
      id: string
    }
  }
};

export const MoviePageContainer = (props:MoviePageContainerType) => (
  <Query query={GET_MOVIE_EXTEND} variables={{ id: props.match.params.id }}>
    {({ error, loading, data }) => {
      if (loading) return (
        <StyledPreloderFront>
          <Preloader>Загрузка</Preloader>
        </StyledPreloderFront>
      );
      if (error) return `Error ${error.message}`;

      return (
        <MoviePage {...data.movie} {...props} />
      );
    }}
  </Query>
);
