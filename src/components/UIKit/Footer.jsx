import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import { Logo } from './Logo';
import { SmallText } from './Typography';

const FooterStyled = styled.footer`
  color: #babbc3;
  background-color: #fff;
  box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 114px;
  width: 100%;
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
