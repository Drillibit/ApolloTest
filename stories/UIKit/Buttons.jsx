import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '../../src/components/UIKit/Button';

const stories = storiesOf('UIKit/Buttons', module);

stories.addWithJSX('basic', () => (
  <React.Fragment>
    <Button
      btnType="transparent-white"
      btnSize="small"
      onClick={action('click')
      }
    >
      <FontAwesomeIcon icon={['fas', 'heart']} />В избранном
    </Button>

    <Button
      btnType="primary"
      btnSize="middle"
      onClick={action('click')}
    ><FontAwesomeIcon icon={['fas', 'play']} />Смотреть трейлер
    </Button>

    <Button
      btnType="primary"
      btnSize="big"
      onClick={action('click')}
    >Подробнее
    </Button>

    <Button
      onClick={action('click')}
    >
      <FontAwesomeIcon icon={['fas', 'heart']} />Избранное
    </Button>

    <Button
      btnType="transparent-white"
      btnSize="small"
      onClick={action('click')}
    >
      <FontAwesomeIcon icon={['fas', 'chevron-left']} />Назад
    </Button>

    <Button
      btnType="transparent-white"
      btnSize="small"
      onClick={action('click')}
    >
      <FontAwesomeIcon icon={['far', 'heart']} />В избранное
    </Button>
  </React.Fragment>
));

