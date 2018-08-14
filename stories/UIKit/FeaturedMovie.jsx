import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { StyledGrid, StyledCol, StyledRow } from '$components/helpers/grid';
import { Rating } from '$components/UIKit/Rating';
import { StyledButton } from '$components/UIKit/Button';
import { Icon } from '$components/UIKit/Icon';
import { LargeText, H1 } from '$components/UIKit/Typography';
import { searchGenre } from '../helpers/genres';

const stories = storiesOf('UIKit/FeaturedMovie', module);

/* eslint-disable */
const somefilm = {
  "api": '4493befd452f5d5eeea5c9d2de1306a8',
  "vote_count": 2079,
  "id": 351286,
  "video": false,
  "vote_average": 6.6,
  "title": "Jurassic World: Fallen Kingdom",
  "popularity": 225.727,
  "poster": "https://image.tmdb.org/t/p/w500/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
  "original_language": "en",
  "original_title": "Jurassic World: Fallen Kingdom",
  "genre_ids": [
    28,
    12,
    36,
  ],
  "backdrop_path": "/3s9O5af2xWKWR5JzP2iJZpZeQQg.jpg",
  "adult": false,
  "overview": "Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
  "release_date": "2018-06-06",
  // не существующее свойство! заменить как появится сервер!
  "timing": 133
};

/* eslint-enable */

const FeaturedMovieStyled = styled.div`
  position: relative;
  min-height: 700px;
  background: #000 url(https://image.tmdb.org/t/p/original/3s9O5af2xWKWR5JzP2iJZpZeQQg.jpg) no-repeat center center;
  background-size: cover;
  padding: 20px;
  align-items: flex-end;
  display: flex;
  color: #fff;
`;

const WrapButton = StyledButton.extend`
  margin-right: 10px;
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

const RatingStyled = styled.div`
  margin: 10px 0 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: solid 2px rgba(255, 255, 255, 0.2);
  background-color: rgba(73, 76, 98, 0.6);
`;

stories.addWithJSX('FeaturedMovie', () => (
  <FeaturedMovieStyled>
    <StyledGrid>
      <StyledRow >
        <StyledCol xs={12}>
          <LargeText><strong>СЕЙЧАС В КИНО</strong></LargeText>
          <H1>{somefilm.title}</H1>
          <Genres>{searchGenre(somefilm.genre_ids).map(
            (genre, index) => <span key={index}>{genre}&nbsp;</span>)}
          </Genres>
          <Timing>{somefilm.timing} минуты</Timing>
        </StyledCol>
      </StyledRow>
      <StyledRow alignItems="center" margin="20px 0 0 0" >
        <StyledCol xs={12} md={6} lg={7} padding="0">
          <WrapButton btnType="primary" btnSize="big" onClick={action('click')}>Подробнее</WrapButton>
          <WrapButton btnType="transparent-white" btnSize="small" onClick={action('click')}><Icon icon="heart" />В избранное</WrapButton>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={5} marginLeft="auto">
          <RatingStyled>
            <Rating voteAverage={somefilm.vote_average} voteCount={somefilm.vote_count} size="lg" />
          </RatingStyled>
        </StyledCol>
      </StyledRow>
    </StyledGrid>
  </FeaturedMovieStyled>
));
