import React from 'react';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CONFIG } from '../../../services/api';
import { GET_MOVIE } from './req';
import { StyledButton } from '../Button';
import { Rating } from '../Rating';
import { StyledGrid, StyledRow, StyledCol } from '../../helpers/grid';
import { H1, LargeText } from '../Typography';
import { Icon } from '../Icon';
import { Preloader } from '../Preloader';
import { FavouriteControll } from '../../../containers/FavouriteControll';
import { ApolloError } from 'apollo-client';

type FeaturedMovieStyledType = {
  movie: {
    backdrop_path: string
  }
};

const FeaturedMovieStyled = styled.div`
  position: relative;
  min-height: 700px;
  background: #000 url(${({ movie }:FeaturedMovieStyledType) => `${CONFIG.IMAGE_BASE}/original/${movie.backdrop_path}`}) no-repeat center;
  background-size: cover;
`;

const PreloaderContainer = styled.div`
  min-height: 700px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

const FeatureGradient = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.03) 13%,
    rgba(0, 0, 0, 0.8)
  );

  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  align-items: flex-end;
  display: flex;
  color: #fff;
`;

const WrapButtonBlock = styled.div`
  margin: 0 0 0 0;
  display: flex;
  align-items: center;
`;

const ButtonStyledWrap = styled(StyledButton)`
  margin-right: 20px;
`;

const Timing = styled.div`
  display: inline-block;
  border-left: 2px solid white;
  opacity: 0.87;
  border-radius: 2px;
  padding-left: 10px;
`;

const Genres = styled.div`
  display: inline-block;

  span {
    word-spacing: 10px;
    word-wrap: break-word;
  }
`;

const StyledRatingWrapper = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

const RatingStyled = styled(Rating)`
  display: inline-flex;
  margin: 10px 0 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: solid 2px rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background-color: rgba(73, 76, 98, 0.2);
`;

const StyledLargeText = styled(LargeText)`
  font-weight: bold;
`;

type FeaturedMovieViewProp = { 
  data:{
      loading: boolean
      error?: ApolloError
      movie: {
      id: string 
      title: number
      overview: string
      genres: [{
        id: string
        name: string
      }]
      backdrop_path: string
      poster_path: string
      release_date: string
      production_countries: {
        name: string
      }
      runtime: string
      vote_count: number
      vote_average: number
      video: {
        name: string
        key: string
      }
      similar: {
        id: string
        title: string
        backdrop_path: string
        poster_path: string
        vote_count: string
        vote_average: string
        overview: string
        runtime: string
        release_date: string
      }
    }
  }
}

const FeaturedMovieView = ({ data: { movie, loading, error }}:FeaturedMovieViewProp) => {
  if (loading) {
    return (
      <PreloaderContainer>
        <Preloader>
          Загрузка
        </Preloader>
      </PreloaderContainer>
    );
  }

  if (error) return `Error! ${error.message}`;
  console.log(movie)
  return (
    <FeaturedMovieStyled movie={movie}>
      <FeatureGradient>
        <StyledGrid>
          <StyledRow>
            <StyledCol xs={12}>
              <StyledLargeText>СЕЙЧАС В КИНО</StyledLargeText>
              <H1>{movie.title}</H1>
              <Genres>
                {movie.genres &&
                  movie.genres.map(genre => (
                    <span key={genre.id}>
                      {genre.name}
                      &nbsp;
                    </span>
                  ))}
              </Genres>
              <Timing>{movie.runtime} мин.</Timing>
            </StyledCol>
          </StyledRow>
          <StyledRow alignItems="center" margin="10px 0 40px 0">
            <StyledCol xs={12} md={6} padding="0">
              <WrapButtonBlock>
                {/* eslint-disable */}
                <Link to={`/movie/${movie.id}`}>
                  <ButtonStyledWrap
                    btnType="primary"
                    btnSize="big"
                  >
                    Подробнее
                  </ButtonStyledWrap>
                </Link>
                {/* eslint-enable */}
                <FavouriteControll
                  btnSize="small"
                  movieId={movie.id}
                >
                  <Icon size="sm" color="#fff" icon="heart" />
                  В избранное
              </FavouriteControll>
              </WrapButtonBlock>
            </StyledCol>
            <StyledCol xs={12} md={6} padding="0" marginLeft="auto">
              <StyledRatingWrapper>
                <RatingStyled
                  voteAverage={movie.vote_average}
                  voteCount={movie.vote_count}
                  size="lg"
                />
              </StyledRatingWrapper>
            </StyledCol>
          </StyledRow>
        </StyledGrid>
      </FeatureGradient>
    </FeaturedMovieStyled>
  );
};

type MovieId = {
  movie: {
    id: string
  }
}
export const FeaturedMovie = compose(
  graphql(GET_MOVIE, {
    options: (ownProps:MovieId) => ({
      variables: {
        id: `${ownProps.movie.id}`
      }
    })
  })
)(FeaturedMovieView);
