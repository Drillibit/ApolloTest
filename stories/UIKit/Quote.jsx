import React from 'react';
import { storiesOf } from '@storybook/react';

import { H3 } from '$components/UIKit/Typography';
import { Quote } from '../../src/components/UIKit/Quote';
import { Container } from '../helpers/Container';


const stories = storiesOf('UIKit', module);

const someText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la';

stories.addWithJSX('Quote', () => (
  <Container dark>
    <Quote>
      <H3>{someText}</H3>
    </Quote>
  </Container>
));
