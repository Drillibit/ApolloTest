import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ButtonTest } from '../../src/components/UIKit/ButtonTest';

const stories = storiesOf('UIKit/ButtonTest', module);




stories.addWithJSX('default', () => (
  <ButtonTest onClick={action('clicked')} />
));
