import React from 'react';
import { storiesOf } from '@storybook/react';

import { Dropdown } from '../../src/components/UIKit/Dropdown';

const stories = storiesOf('UIKit/Dropdowns', module);

stories.addWithJSX('default', () => (
  <Dropdown />
));
