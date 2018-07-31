import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../../src/components/UIKit/Button';
import { Icon } from '../helpers/Icon';

const stories = storiesOf('UIKit/Buttons', module);

stories.addWithJSX('basic', () => (
  <React.Fragment>
    <Button
      btnType="transparent-white"
      btnSize="small"
      onClick={action('click')
      }
    >
      <Icon icon="heart" />В избранном
    </Button>

    <Button
      btnType="primary"
      btnSize="middle"
      onClick={action('click')}
    >
      <Icon icon="play" />Смотреть трейлер
    </Button>

    <Button
      btnType="primary"
      btnSize="middle"
      onClick={action('click')}
    >
      <Icon />Войти
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
      <Icon icon="heart-fillout" />Избранное
    </Button>

    <Button
      btnType="transparent-white"
      btnSize="small"
      onClick={action('click')}
    >
      <Icon icon="chevron-left" />Назад
    </Button>

    <Button
      btnType="transparent-white"
      btnSize="small"
      onClick={action('click')}
    >
      <Icon icon="heart-fillout" />В избранное
    </Button>

    <Button
      btnType="transparent-dark"
      btnSize="small"
      onClick={action('click')}
    >
      <Icon icon="heart-fillout" />В избранное
    </Button>
  </React.Fragment>
));

