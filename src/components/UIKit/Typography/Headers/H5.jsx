import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

const H5Styled = styled.h5`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const H5 = ({ children }) => (
  <H5Styled>
    {children}
  </H5Styled>
);

H5.propTypes = {
  children: oneOfType([node, arrayOf(node)])
};

H5.defaultProps = {
  children: ''
};
