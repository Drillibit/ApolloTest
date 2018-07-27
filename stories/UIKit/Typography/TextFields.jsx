import React from 'react';
import { storiesOf } from '@storybook/react';


import { SmallText } from '../../../src/components/UIKit/Typography/TextFields/SmallText';

const stories = storiesOf('Typography/TextFields', module);

stories
  .add('SmallText', () => (
    <SmallText>Some text</SmallText>
  ));
