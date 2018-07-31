import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Search } from '../../src/components/UIKit/Search';

const stories = storiesOf('UIKit/Search', module);

stories.addWithJSX('Search', () => (
  <Search onChange={action('search')}>Search</Search>
));
