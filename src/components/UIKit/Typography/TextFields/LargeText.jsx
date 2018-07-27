import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

const LargeTextStyled = styled.p`
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const LargeText = ({ children }) => (
  <LargeTextStyled>
    {children}
  </LargeTextStyled>
);

LargeText.propTypes = {
  children: oneOfType([node, arrayOf(node)])
};

LargeText.defaultProps = {
  children: ''
};
