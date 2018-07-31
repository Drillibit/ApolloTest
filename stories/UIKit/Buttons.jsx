import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '../../src/components/UIKit/Button';

const Icon = ({ icon }) => <FontAwesomeIcon icon={icon === 'heart-fillout' ? ['far', 'heart'] : icon} />;

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
    ><Icon icon="play" />Смотреть трейлер
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
      <Icon icon={['fas', 'heart']} />Избранное
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
  </React.Fragment>
));

