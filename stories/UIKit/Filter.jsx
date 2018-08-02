import React from 'react';
import { storiesOf } from '@storybook/react';

import { Filter } from '../../src/components/UIKit/Filter';
import { Container } from '../helpers/Container';

const stories = storiesOf('UIKit/Filter', module);

stories.addWithJSX('main', () => (
  <Container>
    <Filter>Загрузка</Filter>
  </Container>
));
