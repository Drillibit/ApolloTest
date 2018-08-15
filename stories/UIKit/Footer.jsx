import React from 'react';
import { storiesOf } from '@storybook/react';

import { Footer } from '$components/UIKit/Footer';
import { SmallText } from '$components/UIKit/Typography';


const stories = storiesOf('UIKit', module);
const text = '2018, Все права защищены';

stories.addWithJSX('Footer', () => (
  <Footer>
    <SmallText>{text}</SmallText>
  </Footer>
));
