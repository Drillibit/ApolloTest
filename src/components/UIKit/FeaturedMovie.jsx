import React from 'react';
import { func, objectOf } from 'prop-types';
import styled from 'styled-components';

import { StyledButton } from './Button';
import { Rating } from './Rating';
import { StyledGrid, StyledRow, StyledCol } from '../helpers/grid';
import { H1, LargeText } from './Typography';
import { Icon } from './Icon';

const FeaturedMovieStyled = styled.div`
  position: relative;
  min-height: 700px;
  background: #000 url(https://image.tmdb.org/t/p/original/3s9O5af2xWKWR5JzP2iJZpZeQQg.jpg) no-repeat center;
  @media (max-width: 560px) {
    min-height: 400px;
    background: #000 url(https://image.tmdb.org/t/p/w780/3s9O5af2xWKWR5JzP2iJZpZeQQg.jpg) no-repeat center;
    margin: 0;
  };
  background-size: cover;
  padding: 20px;
  align-items: flex-end;
  display: flex;
  color: #fff;
`;

const WrapButtonBlock = styled.div`
  margin: 10px 0 0 0;
`;

const ButtonStyledWrap = styled(StyledButton)`
  margin: 0 20px 20px 0; 
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
  background-color: rgba(73, 76, 98, 0.6);
`;

export const FeaturedMovie = ({ film, search, onClick }) => (
  <FeaturedMovieStyled>
    <StyledGrid>
      <StyledRow>
        <StyledCol xs={12}>
          <LargeText><strong>СЕЙЧАС В КИНО</strong></LargeText>
          <H1>{film.title}</H1>
          <Genres>{search(film.genre_ids).map(
            genre => <span key={genre}>{genre}&nbsp;</span>)}
          </Genres>
          <Timing>{film.timing} минуты</Timing>
        </StyledCol>
      </StyledRow>
      <StyledRow alignItems="center" margin="20px 0 0 0">
        <StyledCol xs={12} md={6} padding="0">
          <WrapButtonBlock>
            <ButtonStyledWrap btnType="primary" btnSize="big" onClick={onClick}>Подробнее</ButtonStyledWrap>
            <ButtonStyledWrap btnType="transparent-white" btnSize="small" onClick={onClick}><Icon icon="heart" />В избранное</ButtonStyledWrap>
          </WrapButtonBlock>
        </StyledCol>
        <StyledCol xs={12} md={6} padding="0" marginLeft="auto">
          <StyledRatingWrapper>
            <RatingStyled voteAverage={film.vote_average} voteCount={film.vote_count} size="lg" />
          </StyledRatingWrapper>
        </StyledCol>
      </StyledRow>
    </StyledGrid>
  </FeaturedMovieStyled>
);

FeaturedMovie.propTypes = {
  film: objectOf(),
  search: func,
  onClick: func
};

FeaturedMovie.defaultProps = {
  film: {},
  search: f => f,
  onClick: f => f
};
