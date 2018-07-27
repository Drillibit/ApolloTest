import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

const SmallTextStyled = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const SmallText = ({ children }) => (
  <SmallTextStyled>
    {children}
  </SmallTextStyled>
);

SmallText.propTypes = {
  children: oneOfType([node, arrayOf(node)])
};

SmallText.defaultProps = {
  children: ''
};
