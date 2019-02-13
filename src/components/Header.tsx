import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Logo } from './UIKit/Logo';
import { StyledButton } from './UIKit/Button';
import { SearchContainer } from '../containers/SearchContainer';
import { StyledGrid, StyledRow, StyledCol } from './helpers/grid';

const StyledHeaderContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  min-width: 100%;
  z-index: 1000;
  height: 109px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  @media (max-width: 440px) {
    padding-top: 40px;
  }
`;

const StyledRightGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;

  ${StyledButton} {
    padding: 0 36px;
  }
  @media (max-width: 440px) {
    position: relative;
    padding-top: 1px;
    flex-direction: column-reverse;
    transform: scale(0.8);
  }
`;

export const Header = props => (
  <StyledHeaderContainer>
    <StyledGrid>
      <StyledRow middle="xs">
        <StyledCol xs={6} md={4} lg={6}>
          <Link to="/">
            <Logo />
            {/* <p>Hello</p> */}
          </Link>
        </StyledCol>
        <StyledCol marginLeft="auto" xs={6} md={8} lg={6}>
          <StyledRightGroup>
            <SearchContainer {...props} />
          </StyledRightGroup>
        </StyledCol>
      </StyledRow>
    </StyledGrid>
  </StyledHeaderContainer>
);
