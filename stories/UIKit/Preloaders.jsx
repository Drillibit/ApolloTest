import React from 'react';
import { storiesOf } from '@storybook/react';

import { Preloader } from '../../src/components/UIKit/Preloader';

const stories = storiesOf('UIKit', module);

stories.addWithJSX('Preloaders', () => (
  <Preloader>Загрузка</Preloader>
));
