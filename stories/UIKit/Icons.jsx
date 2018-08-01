import React from 'react';
import { storiesOf } from '@storybook/react';

import { Icon } from '../../src/components/UIKit/Icon';
import { Container } from '../helpers/Container';

const stories = storiesOf('UIKit/Icons', module);

stories.addWithJSX('basic', () => (
  <Container>
    <Icon icon="heart" /> heart
    <Icon icon="chevron-left" /> chevron-left
    <Icon icon="chevron-down" /> chevron-down
    <Icon icon="chevron-up" /> chevron-up
    <Icon icon="check" /> check
    <Icon icon="search" /> search
    <Icon icon="play" /> play
    <Icon icon="star" /> star
    <Icon icon="heart-fill" /> heart-fill
    <Icon icon="facebook" /> facebook
    <Icon icon="twitter" /> twitter
    <Icon icon="google-plus" /> google-plus
  </Container>
));

