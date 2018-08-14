import React from 'react';
import { storiesOf } from '@storybook/react';

import { colors } from '$components/helpers/colors';
import { Logo } from '$components/UIKit/Logo';
import { Container } from '$helpers/Container';


const stories = storiesOf('UIKit', module);

stories
  .addWithJSX('Logo', () => (
    <Container dark>
      <Logo />
      <Logo color={colors.grey500} />
    </Container>
  ));
