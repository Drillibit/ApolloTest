import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

const ExtraLargeTextStyled = styled.p`
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const ExtraLargeText = ({ children }) => (
  <ExtraLargeTextStyled>
    {children}
  </ExtraLargeTextStyled>
);

ExtraLargeText.propTypes = {
  children: oneOfType([node, arrayOf(node)])
};

ExtraLargeText.defaultProps = {
  children: ''
};
