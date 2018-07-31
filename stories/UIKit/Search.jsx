import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// test films list
// отключить filmList когда будет бекэнд
import { filmsList } from '../../src/components/Search/testFilmList';


import { Search } from '../../src/components/UIKit/Search';

const stories = storiesOf('UIKit/Search', module);

stories.addWithJSX('Search', () => (
  <Search filmsList={filmsList} onChange={action('onChange')} />
));
