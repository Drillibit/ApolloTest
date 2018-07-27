import React from 'react';
import { storiesOf } from '@storybook/react';


import { ModalRegister, SocialContainer } from '../../src/components/UIKit/ModalRegiseter';

const stories = storiesOf('UIKit/Modal', module);

stories.addWithJSX('register', () => (
  <ModalRegister>
    <SocialContainer />
  </ModalRegister>
));
