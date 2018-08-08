import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Rating } from '$components/UIKit/Rating';
import { Button } from '$components/UIKit/Button';
import { Icon } from '$components/UIKit/Icon';
import { LargeText, H1 } from '$components/UIKit/Typography';
import { Container } from '../helpers/Container';

/*
  LargeText 18px bold and normal

*/ 

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

stories.addWithJSX('FeaturedMovie', () => (
  <Container dark>
    <div>
      <div>
        <LargeText><strong>Сейчас в кино</strong></LargeText>
        <H1>{somefilm.title}</H1>
        <div>
          <span>{somefilm.genre_ids.map((genre, index) => <span key={index}>{genre}&nbsp;</span>)}</span>
          <span>{somefilm.timing} минуты</span>
        </div>
      </div>
      <div>
        <div>
          <Button btnType="primary" btnSize="big" onClick={action('click')}>Подробнее</Button>
          <Button btnType="transparent-white" btnSize="small" onClick={action('click')}><Icon icon="heart" />В избранное</Button>
        </div>
        <div><Rating voteAverage={somefilm.vote_average} voteCount={somefilm.vote_count} size="lg" /></div>
      </div>
    </div>
  </Container>
));
