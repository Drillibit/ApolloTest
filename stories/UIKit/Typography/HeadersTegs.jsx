import React from 'react';
import { storiesOf } from '@storybook/react';


import { H1 } from '../../../src/components/UIKit/Typography/Headers/H1';
import { H2 } from '../../../src/components/UIKit/Typography/Headers/H2';
import { H3 } from '../../../src/components/UIKit/Typography/Headers/H3';

const stories = storiesOf('Typography/HeadersTegs', module);

stories
  .add('H1', () => (
    <H1>Some text</H1>
  ))
  .add('H2', () => (
    <H2>Some text</H2>
  ))
  .add('H3', () => (
    <H3>Some text</H3>
  ));
