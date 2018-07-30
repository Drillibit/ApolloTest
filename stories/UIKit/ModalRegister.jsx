import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


import { ModalRegister, SocialContainer } from '../../src/components/UIKit/ModalRegister';
import { Modal, ModalButton } from '../../src/components/UIKit/ModalButton';


storiesOf('UIKit/Modal', module)
  .add('click test', () => (
    <ModalButton onClick={action('onClick')} />
  ));

// stories.addWithJSX('register', () => (
//   <ModalButton onClick={action('clicked')} />
// ));
