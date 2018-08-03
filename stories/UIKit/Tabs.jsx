import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tabs } from '../../src/components/UIKit/Tabs';

const stories = storiesOf('UIKit/Preloaders', module);

stories.addWithJSX('main', () => (
  <Tabs>Загрузка</Tabs>
));
