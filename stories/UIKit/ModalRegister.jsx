import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Modal } from '../../src/components/UIKit/ModalInit';
import { ModalRegister } from '../../src/components/UIKit/ModalRegister';


storiesOf('UIKit/Modal', module)
  .add('click test', () => (
    <Modal onClick={action('onClick')} />
  ));
