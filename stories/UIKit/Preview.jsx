import { storiesOf } from '@storybook/react';
import React from 'react';

import { Container } from '$helpers/Container';
import { Preview } from '../../src/components/UIKit/Preview';

const stories = storiesOf('UIKit', module);

const propsOne = {
  voteCount: 2079,
  id: 351286,
  video: false,
  voteAverage: 6.6,
  title: 'Jurassic World: Fallen Kingdom',
  bg: 'https://image.tmdb.org/t/p/w500/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
  original_title: 'Jurassic World: Fallen Kingdom',
  genre_ids: [28, 12, 878],
  adult: false,
  description:
    'Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.',
  yaer: '2018-06-06'
};

const propsTwo = {
  voteAverage: 5,
  voteCount: 4.546,
  size: 'md',
  bg: 'https://image.tmdb.org/t/p/w500/80PWnSTkygi3QWWmJ3hrAwqvLnO.jpg',
  description:
    'Фильм рассказывает о приключениях писателя Ньюта Скамандера в Нью-Йоркском секретном обществе волшебниоков',
  title: 'Фантастические твари и где они обитают',
  year: 2017,
  duration: 133,
  pg: '12+',
  genre: 'Фантастика, Приключения, Семейное кино',
  cast:
    'Эдди Редмэйн, Кэтрин Уотерстон, Элисон Судол, Колин Фаррелл, Эзра Миллер, Джемма Чан'
};

stories.addWithJSX('Preview', () => (
  <Container>
    <Preview {...propsOne} />
    <Preview {...propsTwo} />
    <Preview {...propsOne} />
    <Preview {...propsTwo} />
    <Preview {...propsOne} />
    <Preview {...propsTwo} />
    <Preview {...propsOne} />
    <Preview {...propsTwo} />
  </Container>
));
