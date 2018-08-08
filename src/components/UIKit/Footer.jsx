import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import { Logo } from './Logo';
import { SmallText } from './Typography';

const FooterStyled = styled.footer`
  color: #babbc3;
  text-align: center
`;

export const Footer = ({ text, color }) => (
  <FooterStyled>
    <Logo color={color} />
    <SmallText>{text}</SmallText>
  </FooterStyled>
);

Footer.propTypes = {
  text: string,
  color: string
};

Footer.defaultProps = {
  text: 'Hello world',
  color: '#ffffff'
};
