import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Preloader } from '../../src/components/UIKit/Preloader';

const stories = storiesOf('UIKit/Preloaders', module);

stories.addWithJSX('main', () => (
  <Preloader onClick={action('click')}>Загрузка</Preloader>
));
