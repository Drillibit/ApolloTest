import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../../src/components/UIKit/Button';

const stories = storiesOf('UIKit/Buttons', module);

stories.addWithJSX('default', () => (
  <Button onClick={action('click')}>Press me</Button>
));
