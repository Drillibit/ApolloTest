import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

// сделаем импорт из Typography
import { H3 } from './Typography';
import { Icon } from './Icon';


const QuoteStyled = styled.div`
  display: inline-block;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  font-family: 'Source Sans Pro';
  line-height: normal;
  letter-spacing: normal;
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
  color: white
`;

export const Quote = ({ tagline }) => (
  <div>
    <Shape><StyledIcon icon="quote" /></Shape>
    <QuoteStyled>
      <H3>{tagline}</H3>
    </QuoteStyled>
  </div>
);

Quote.propTypes = {
  tagline: string
};

Quote.defaultProps = {
  tagline: ''
};
