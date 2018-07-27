import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

const H2Styled = styled.h2`
  font-size: 32px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const H2 = ({ children }) => (
  <H2Styled>
    {children}
  </H2Styled>
);

H2.propTypes = {
  children: oneOfType([node, arrayOf(node)])
};

H2.defaultProps = {
  children: ''
};
