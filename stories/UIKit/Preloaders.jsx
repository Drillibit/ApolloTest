import React from 'react';
import { storiesOf } from '@storybook/react';

import { Preloader } from '../../src/components/UIKit/Preloader';

const stories = storiesOf('UIKit/Preloaders', module);

stories.addWithJSX('main', () => (
  <Preloader>Загрузка</Preloader>
));
