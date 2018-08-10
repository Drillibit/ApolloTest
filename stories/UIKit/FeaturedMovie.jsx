import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Rating } from '$components/UIKit/Rating';
import { Button } from '$components/UIKit/Button';
import { Icon } from '$components/UIKit/Icon';
import { LargeText, H1 } from '$components/UIKit/Typography';
import { Container } from '../helpers/Container';
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
    878
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
  width: 1437px;
  height: 700px;
  background: #000 url(https://image.tmdb.org/t/p/original/3s9O5af2xWKWR5JzP2iJZpZeQQg.jpg) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const WrapBlock = styled.div`
  width: 1300px;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
`;

const FilmTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #fff;
`;

const GenresBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Genres = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & span {
    margin-right: 10px;
  }
`;

const DurationBlock = styled.div`
  border-left: 2px solid white;
  opacity: 0.87;
  border-radius: 2px;
  padding-left: 20px;
  margin-left: 10px;
`;

const FilmButtonsBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

const RatingBlock = styled.div`
  display: flex;
  align-content: center;

  justify-content: center;
  
  padding: 16px;
  border-radius: 5px;
  border: solid 2px rgba(255, 255, 255, 0.2);
  background-color: rgba(73, 76, 98, 0.6);
`;

const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    margin-right: 20px; 
  }
`;

stories.addWithJSX('FeaturedMovie', () => (
  <Container dark>
    <FeaturedMovieStyled>
      <WrapBlock>
        <FilmTitleBlock>
          <LargeText><strong>СЕЙЧАС В КИНО</strong></LargeText>
          <H1>{somefilm.title}</H1>
          <GenresBlock>
            <Genres>{searchGenre(somefilm.genre_ids).map(
              (genre, index) => <span key={index}>{genre}&nbsp;</span>)}
            </Genres>
            <DurationBlock>{somefilm.timing} минуты</DurationBlock>
          </GenresBlock>
        </FilmTitleBlock>

        <FilmButtonsBlock>
          <ButtonsWrap>
            <Button btnType="primary" btnSize="big" onClick={action('click')}>Подробнее</Button>
            <Button btnType="transparent-white" btnSize="small" onClick={action('click')}><Icon icon="heart" />В избранное</Button>
          </ButtonsWrap>
          <RatingBlock><Rating voteAverage={somefilm.vote_average} voteCount={somefilm.vote_count} size="lg" /></RatingBlock>
        </FilmButtonsBlock>
      </WrapBlock>
    </FeaturedMovieStyled>
  </Container>
));
