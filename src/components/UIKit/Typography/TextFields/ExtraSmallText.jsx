import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

const ExtraSmallTextStyled = styled.p`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const ExtraSmallText = ({ children }) => (
  <ExtraSmallTextStyled>
    {children}
  </ExtraSmallTextStyled>
);

ExtraSmallText.propTypes = {
  children: oneOfType([node, arrayOf(node)])
};

ExtraSmallText.defaultProps = {
  children: ''
};
