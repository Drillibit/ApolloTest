import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

const H4Styled = styled.h4`
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const H4 = ({ children }) => (
  <H4Styled>
    {children}
  </H4Styled>
);

H4.propTypes = {
  children: oneOfType([node, arrayOf(node)])
};

H4.defaultProps = {
  children: ''
};
