import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ButtonP, ButtonPP, ButtonF, ButtonFP, ButtonFB, ButtonFI, ButtonFBack } from '../../src/components/UIKit/Button';

const stories = storiesOf('UIKit/Buttons', module);

stories.addWithJSX('primary', () => (
  <ButtonP onClick={action('click')}>Регистрация</ButtonP>
));

stories.addWithJSX('primary-popup', () => (
  <ButtonPP onClick={action('click')}>Подробнее</ButtonPP>
));

stories.addWithJSX('favourite', () => (
  <ButtonF onClick={action('click')}>В избранное</ButtonF>
));

stories.addWithJSX('favourite-popup', () => (
  <ButtonFP onClick={action('click')}>В избранное</ButtonFP>
));

stories.addWithJSX('favourite-big', () => (
  <ButtonFB onClick={action('click')}>В избранное</ButtonFB>
));

stories.addWithJSX('favourite-in', () => (
  <ButtonFI onClick={action('click')}>В избранном</ButtonFI>
));

stories.addWithJSX('favourite-back', () => (
  <ButtonFBack onClick={action('click')}>Назад</ButtonFBack>
));

