import React from 'react';
import { storiesOf } from '@storybook/react';

import { Container } from '../../src/components/UIKit/Container';

const stories = storiesOf('UIKit/Container', module);

stories.addWithJSX('main', () => (
  <Container dark>
    <button>Press me</button>
    <button>Press me</button>
    <button>Press me</button>
  </Container>
));
