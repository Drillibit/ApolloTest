import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text, SmallText, LargeText } from '../../../src/components/UIKit/Typography/textFields';

const stories = storiesOf('UIKit/Typography', module);

stories
  .add('Texts', () => (
    <div>
      <LargeText>Large text: 18px</LargeText><br />
      <Text>Text: 16px</Text><br />
      <SmallText>Small text: 14px</SmallText><br />
    </div>
  ));
