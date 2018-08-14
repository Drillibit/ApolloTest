import React from 'react';
import { storiesOf } from '@storybook/react';

import { Container } from '../helpers/Container';

const stories = storiesOf('UIKit', module);

stories.addWithJSX('Container', () => (
  <Container dark>
    <button>Press me</button>
    <button>Press me</button>
    <button>Press me</button>
  </Container>
));
