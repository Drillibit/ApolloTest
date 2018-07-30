import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../../src/components/UIKit/Button';

const stories = storiesOf('UIKit/Buttons', module);

stories.addWithJSX('basic', () => (
  <Button
    type="primary-dark"
    size="big"
    color="white"
    onClick={action('click')}
  >Подробнее
  </Button>
));

