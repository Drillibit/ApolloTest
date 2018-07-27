import React from 'react';
import { storiesOf } from '@storybook/react';


import { ModalRegister, SocialContainer } from '../../src/components/UIKit/ModalRegister';

const stories = storiesOf('UIKit/Modal', module);

stories.addWithJSX('register', () => (
  <ModalRegister>
    <SocialContainer />
  </ModalRegister>
));
