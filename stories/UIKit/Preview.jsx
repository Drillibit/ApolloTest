import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import { Container } from '../helpers/Container';
import { Preview } from '../../src/components/UIKit/Preview';

const stories = storiesOf('UIKit/Preview', module);

const propsOne = {
  voteCount: 2079,
  id: 351286,
  video: false,
  voteAverage: 6.6,
  title: 'Jurassic World: Fallen Kingdom',
  bg: 'https://image.tmdb.org/t/p/w500/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
  original_title: 'Jurassic World: Fallen Kingdom',
  genre_ids: [
    28,
    12,
    878
  ],
  adult: false,
  description: 'Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.',
  yaer: '2018-06-06'
};

const propsTwo = {
  voteCount: 2079,
  id: 351286,
  video: false,
  voteAverage: 6.6,
  title: 'Jurassic World: Fallen Kingdom',
  bg: 'https://image.tmdb.org/t/p/w500/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
  original_title: 'Jurassic World: Fallen Kingdom',
  genre_ids: [
    28,
    12,
    878
  ],
  adult: false,
  description: 'Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.',
  yaer: '2018-06-06'
};


stories.addWithJSX(
  'Preview component',
  () => (
    <Container>
      <Preview {...propsOne} />
    </Container>
  )
);
