import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import { Container } from '../helpers/Container';
import { Rating } from '../../src/components/UIKit/Rating';

const stories = storiesOf('UIKit', module);

const propsOne = {
  voteAverage: 9.9999,
  voteCount: 4.546,
  size: 'lg'
};

const propsTwo = {
  voteAverage: 8.4,
  voteCount: 2.523,
  size: 'lg'
};

const propsOneMd = {
  voteAverage: 6.7,
  voteCount: 4.546,
  size: 'md'
};

const propsTwoMd = {
  voteAverage: 8.4,
  voteCount: 2.523,
  size: 'md'
};

const propsThreeMd = {
  voteAverage: 2.8,
  voteCount: 11.121,
  size: 'md'
};
stories.addWithJSX('Rating', () => (
  <Fragment>
    <Container dark>
      <Rating {...propsOne} />
      <Rating {...propsTwo} />
    </Container>
    <Container>
      <Rating {...propsOneMd} />
      <Rating {...propsTwoMd} />
      <Rating {...propsThreeMd} />
    </Container>
  </Fragment>
));
