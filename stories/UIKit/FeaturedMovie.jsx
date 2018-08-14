import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FeaturedMovie } from '$components/UIKit/FeaturedMovie';
import { searchGenre } from '../helpers/genres';

const stories = storiesOf('UIKit/FeaturedMovie', module);

/* eslint-disable */
const somefilm = {
  "api": '4493befd452f5d5eeea5c9d2de1306a8',
  "vote_count": 2079888,
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

stories.addWithJSX('FeaturedMovie', () => (
  <FeaturedMovie onClick={action('click')} search={searchGenre} film={somefilm} />
));
