import React from 'react';
import { storiesOf } from '@storybook/react';

import { Container } from '../helpers/Container';
import { Search } from '../../src/components/UIKit/Search';

import { filmsList } from '../helpers/testFilmsList';

const stories = storiesOf('UIKit/Search', module);

const dataSearch = (text) => {
  const value = text.toLowerCase();
  // const value = event.target.value.toLowerCase();
  let filter = filmsList.filter(film => film.title.toLowerCase().includes(value));
  if (!value) { filter = []; }
  return filter;
};


stories.addWithJSX('Search', () => (
  <Container>
    <Search searchFilm={dataSearch} filter={} />
  </Container>
));

