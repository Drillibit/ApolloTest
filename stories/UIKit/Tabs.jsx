import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Tabs, TabPane } from '../../src/components/UIKit/Tabs';
import { Filter } from '../../src/components/UIKit/Filter';

const stories = storiesOf('UIKit/Tabs', module);

const list = [
  { id: 356, name: 'Мультфильм' },
  { id: 357, name: 'Комедия' },
  { id: 358, name: 'Боевик' },
  { id: 359, name: 'Приключения' },
  { id: 360, name: 'Фантастика' },
  { id: 361, name: 'Мелодрама' },
  { id: 362, name: 'Ужасы' },
  { id: 363, name: 'Детектив' },
  { id: 364, name: 'Спорт' },
  { id: 365, name: 'Документальное' },
  { id: 366, name: 'Триллер' },
  { id: 367, name: 'Семейное кино' },
  { id: 368, name: 'Драма' },
  { id: 369, name: 'Арт-Хаус' },
];

stories.addWithJSX('main', () => (
  <Tabs onChange={action('onChange')}>
    <TabPane tabName="Сейчас в кино">
      {'bla bla bla 1'}
    </TabPane>
    <TabPane tabName="Топ 100">
      {'bla bla bla 2'}
    </TabPane>
    <TabPane tabName={<Filter list={list} onChange={action('onChange')} />} />
  </Tabs>
));
