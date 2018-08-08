import React from 'react';
import { oneOfType, node, arrayOf, string } from 'prop-types';
import { storiesOf } from '@storybook/react';

import { Footer } from '$components/UIKit/Footer';
import { colors } from '$components/helpers/colors';
import { SmallText } from '$components/UIKit/Typography';
import { Container } from '../helpers/Container';

const stories = storiesOf('UIKit/Footer', module);
//const text = '2018, Все права защищены';

const FooterWrapper = ({ text }) => (
  <Footer>
    <SmallText>{text}</SmallText>
  </Footer>
);

stories.addWithJSX('Footer', () => (
  <Container>
    <FooterWrapper />
  </Container>
));

FooterWrapper.propTypes = {
  text: string
};

FooterWrapper.defaultProps = {
  text: '2018, Все права защищены'
};
