import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tabs, TabPane } from '../../src/components/UIKit/Tabs';

const stories = storiesOf('UIKit/Tabs', module);

stories.addWithJSX('main', () => (
  <Tabs>
    <TabPane tabName="Сейчас в кино">
      {'bla bla bla 1'}
    </TabPane>
    <TabPane tabName="Топ 100">
      {'bla bla bla 2'}
    </TabPane>
  </Tabs>
));
