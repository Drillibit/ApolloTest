import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

const H3Styled = styled.h3`
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const H3 = ({ children }) => (
  <H3Styled>
    {children}
  </H3Styled>
);

H3.propTypes = {
  children: oneOfType([node, arrayOf(node)])
};

H3.defaultProps = {
  children: ''
};
