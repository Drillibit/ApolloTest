import React from 'react';
import { storiesOf } from '@storybook/react';

import { H1, H2, H3 } from '../../../src/components/UIKit/Typography/headings';

const stories = storiesOf('UIKit/Typography', module);

stories
  .add('Headings', () => (
    <div>
      <H1>h1: 48px</H1>
      <H2>h2: 32px</H2>
      <H3>h3: 20px</H3>
    </div>
  ));
