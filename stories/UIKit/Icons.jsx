import React from 'react';
import { storiesOf } from '@storybook/react';

import { Icon } from '../../src/components/UIKit/Icon';

const stories = storiesOf('UIKit/Icons', module);

stories.addWithJSX('basic', () => (
  <React.Fragment>
    <Icon icon="play" />
    <Icon icon="heart" />
    <Icon icon="chevron-left" />
    <Icon icon="chevron-down" />
    <Icon icon="check" />
    <Icon icon="search" />
    <Icon icon="play" />
    <Icon icon="star" />
    <Icon icon="heart-fill" />
    <Icon icon="facebook" />
    <Icon icon="twitter" />
    <Icon icon="google-plus" />
  </React.Fragment>
));

