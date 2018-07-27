import React from 'react';
import { storiesOf } from '@storybook/react';

import { H1, H2, H3 } from '../../../src/components/UIKit/Typography/headings';

const stories = storiesOf('UIKit/Typography', module);

stories
  .add('Headings', () => (
    <div>
      <H1>{'<H1>'} 48px: Almost before we knew it, we had left the ground.</H1>
      <H2>{'<H2>'} 32px: Almost before we knew it, we had left the ground.</H2>
      <H3>{'<H3>'} 20px: Almost before we knew it, we had left the ground.</H3>
    </div>
  ));
