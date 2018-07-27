import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

const MediumTextStyled = styled.p`
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const MediumText = ({ children }) => (
  <MediumTextStyled>
    {children}
  </MediumTextStyled>
);

MediumText.propTypes = {
  children: oneOfType([node, arrayOf(node)])
};

MediumText.defaultProps = {
  children: ''
};
