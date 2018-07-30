import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../../src/components/UIKit/Button';

const stories = storiesOf('UIKit/Buttons', module);

stories.addWithJSX('basic', () => (
  <React.Fragment>
    <Button
      btnType="primary"
      btnSize="big"
      btnShadow
      onClick={action('click')}
    >Подробнее 1
    </Button>

    <Button
      btnType="primary"
      btnSize="middle"
      onClick={action('click')}
    >Подробнее
    </Button>

    <Button
      btnType="transparent-dark"
      btnSize="small"
      onClick={action('click')}
    >Подробнее
    </Button>

    <Button
      onClick={action('click')}
    >Подробнее
    </Button>
  </React.Fragment>
));

