import React from 'react';
import { oneOfType, node, arrayOf } from 'prop-types';
import styled from 'styled-components';

import { Logo } from './Logo';
import { colors } from '../helpers/colors';

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

type FooterPorps = {
  children: React.ReactNode
};

export const Footer = ({ children }:FooterPorps) => (
  <FooterStyled>
    <Logo color={colors.grey500} />
    {children}
  </FooterStyled>
);

Footer.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired
};
