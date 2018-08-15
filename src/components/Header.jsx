import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Logo } from './UIKit/Logo';
import { Button, StyledButton } from './UIKit/Button';
import { SearchContainer } from '../containers/SearchContainer';
import { StyledGrid, StyledRow, StyledCol } from './helpers/grid';

const StyledHeaderContainer = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    min-width: 100%;
    z-index: 1000;
    height: 109px;
    background-image: linear-gradient( to bottom,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0) 100%);
`;

const StyledRightGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;

  ${StyledButton} {
    padding: 0 36px;
  }
`;

const SearchWrapper = styled.div`
  margin: 0 20px 0 auto;
`;

export const Header = () => (
  <StyledHeaderContainer>
    <StyledGrid>
      <StyledRow middle="xs">
        <StyledCol xs={12} md={4} lg={6}>
        <Link to="/">
          <Logo />
        </Link>
        </StyledCol>
        <StyledCol marginLeft="auto" xs={12} md={8} lg={6}>
          <StyledRightGroup>
            <SearchWrapper>
              <SearchContainer />
            </SearchWrapper>
            <Button btnType="primary">
              Войти
            </Button>
          </StyledRightGroup>
        </StyledCol>
      </StyledRow>
    </StyledGrid>
  </StyledHeaderContainer>
);
