import React from 'react';
import { storiesOf } from '@storybook/react';

import { Footer } from '$components/UIKit/Footer';
import { colors } from '$components/helpers/colors';
import { SmallText } from '$components/UIKit/Typography';
import { Container } from '../helpers/Container';

const stories = storiesOf('UIKit/Footer', module);
const text = '2018, Все права защищены';

stories.addWithJSX('Footer', () => (
  <Container>
    <Footer>
      <SmallText>{text}</SmallText>
    </Footer>
  </Container>
));
