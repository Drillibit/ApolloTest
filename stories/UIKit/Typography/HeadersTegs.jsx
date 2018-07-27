import React from 'react';
import { storiesOf } from '@storybook/react';


import { H1 } from '../../../src/components/UIKit/Typography/Headers/H1';
import { H2 } from '../../../src/components/UIKit/Typography/Headers/H2';
import { H3 } from '../../../src/components/UIKit/Typography/Headers/H3';
import { H4 } from '../../../src/components/UIKit/Typography/Headers/H4';
import { H5 } from '../../../src/components/UIKit/Typography/Headers/H5';

const stories = storiesOf('Typography/HeadersTegs', module);

stories
  .add('H1', () => (
    <H1>Some text: 48px</H1>
  ))
  .add('H2', () => (
    <H2>Some text: 32px</H2>
  ))
  .add('H3', () => (
    <H3>Some text: 20px</H3>
  ))
  .add('H4', () => (
    <H4>Some text: 18px</H4>
  ))
  .add('H5', () => (
    <H5>Some text: 16px</H5>
  ));
