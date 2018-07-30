import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ModalButton } from '../../src/components/UIKit/ModalButton';


storiesOf('UIKit/Modal', module)
  .add('click test', () => (
    <ModalButton onClick={action('onClick')} />
  ));
