import React, { Fragment } from 'react';
import styled from 'styled-components';

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

type QuoteProp = {
  children: React.ReactNode
};

export const Quote = ({ children }:QuoteProp) => (
  <Fragment>
    <Shape>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="15"
        viewBox="0 0 23 15"
      >
        <g fill="none">
          <path
            fill="#fff"
            d="M18.025 5C20.775 5 23 7.25 23 10s-2.25 5-5 5-5-2.25-5-5c0-5.525 4.475-10 10-10 0 0-3.275 1.225-4.975 5zM10.5 10c0 2.75-2.25 5-5 5s-5-2.25-5-5c0-5.525 4.475-10 10-10 0 0-3.275 1.225-4.975 5 2.75 0 4.975 2.25 4.975 5z"
          />
        </g>
      </svg>
    </Shape>
    <QuoteStyled>{children}</QuoteStyled>
  </Fragment>
);
