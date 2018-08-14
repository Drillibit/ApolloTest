import React from 'react';
import { storiesOf } from '@storybook/react';

import { Container } from '$helpers/Container';
import { Text, SmallText, LargeText } from '../../../src/components/UIKit/Typography';

const stories = storiesOf('UIKit/Typography', module);

stories
  .add('Texts', () => (
    <Container>
      <div>
        <LargeText>{'<LargeText>'} 18px: Silver mist suffused the deck of the ship.</LargeText>
        <Text>{'<Text>'} 16px: Silver mist suffused the deck of the ship.</Text>
        <SmallText>{'<SmallText>'} 14px: Silver mist suffused the deck of the ship.</SmallText>
      </div>
    </Container>
  ));
