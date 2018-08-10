import React from 'react';
import { node, arrayOf, oneOfType } from 'prop-types';
import styled from 'styled-components';

import { H3 } from './Typography';
import { Icon } from './Icon';

const QuoteStyled = styled.div`
  display: inline-block;
  font-weight: normal;
  width: 500px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  color: #ffffff;
`;

const Shape = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-right: 16.5px; 
  color: #ffffff;
`;

const StyledIcon = styled(Icon)`
  font-size: 24px;
  color: white;
`;

export const Quote = ({ children }) => (
  <div>
    <Shape><StyledIcon icon="quote" /></Shape>
    <QuoteStyled>
      <H3>{children}</H3>
    </QuoteStyled>
  </div>
);

Quote.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired
};
