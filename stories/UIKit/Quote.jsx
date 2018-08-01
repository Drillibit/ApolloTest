import React from 'react';
import { storiesOf } from '@storybook/react';

import { Quote } from '../../src/components/UIKit/Quote';
import { Container } from '../helpers/Container';

const stories = storiesOf('UIKit/Quote', module);

const someText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la';


stories.addWithJSX('Quote', () => (
  <Container dark>
    <Quote tagline={someText} />
  </Container>
));
