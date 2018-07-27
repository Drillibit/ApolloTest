import React from 'react';
import { storiesOf } from '@storybook/react';

import { ExtraSmallText } from '../../../src/components/UIKit/Typography/TextFields/ExtraSmallText';
import { SmallText } from '../../../src/components/UIKit/Typography/TextFields/SmallText';
import { MediumText } from '../../../src/components/UIKit/Typography/TextFields/MediumText';
import { LargeText } from '../../../src/components/UIKit/Typography/TextFields/LargeText';
import { ExtraLargeText } from '../../../src/components/UIKit/Typography/TextFields/ExtraLargeText';

const stories = storiesOf('Typography/TextFields', module);

stories
  .add('ExtraSmallText', () => (
    <ExtraSmallText>Extra Small text: 12px</ExtraSmallText>
  ))
  .add('SmallText', () => (
    <SmallText>Small text: 14px</SmallText>
  ))
  .add('MediumText', () => (
    <MediumText>Medium text: 18px</MediumText>
  ))
  .add('Medium', () => (
    <LargeText>Large text: 20px</LargeText>
  ))
  .add('ExtraLargeText', () => (
    <ExtraLargeText>Extra Large text: 24px</ExtraLargeText>
  ));
