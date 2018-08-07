import React from 'react';
import { storiesOf } from '@storybook/react';

import { Logo } from '../../src/components/UIKit/Logo';
import { Container } from '../helpers/Container';

const stories = storiesOf('UIKit/Logo', module);

stories
  .addWithJSX('Logo', () => (
    <Container dark>
      <Logo color="#ffffff" />
      <Logo color="#494c62" />
    </Container>
  ));
