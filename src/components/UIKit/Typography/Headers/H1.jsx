import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

const H1Styled = styled.h1`
  font-size: 48px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const H1 = ({ children }) => (
  <H1Styled>
    {children}
  </H1Styled>
);

H1.propTypes = {
  children: oneOfType([node, arrayOf(node)])
};

H1.defaultProps = {
  children: ''
};
