import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../../src/components/UIKit/Button';
import { Container } from '../../src/components/UIKit/Container';

const stories = storiesOf('UIKit/Container', module);

stories.addWithJSX('main', () => (
  <Container>
    <Button onClick={action('click')}>Press me</Button>
    <Button onClick={action('click')}>Press me</Button>
    <Button onClick={action('click')}>Press me</Button>
  </Container>
));
