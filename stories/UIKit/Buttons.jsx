import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCaretRight } from '@fortawesome/free-solid-svg-icons';

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
      <FontAwesomeIcon icon={faHeart} />В избранном
    </Button>

    <Button
      btnType="primary"
      btnSize="middle"
      onClick={action('click')}
    ><FontAwesomeIcon icon={faCaretRight} />Смотреть трейлер
    </Button>

    <Button
      btnType="primary"
      btnSize="big"
      onClick={action('click')}
    >В избранное
    </Button>

    <Button
      onClick={action('click')}
    >
      <FontAwesomeIcon icon={faHeart} />Избранное
    </Button>
  </React.Fragment>
));

