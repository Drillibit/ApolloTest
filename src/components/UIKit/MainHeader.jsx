import React from 'react';
import styled from 'styled-components';

import { Logo } from './Logo';
import { Button, StyledButton } from './Button';
import { Search } from './Search';

const StyledHeaderContainer = styled.div`
    display: flex;
    height: 109px;
    justify-content: space-between;
    align-items: center;
    padding: 0 98px 0 130px;
    background-image: linear-gradient(to bottom,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0) 100%);
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
  margin-right: 30px;
`;

export const MainHeader = props => (
  <StyledHeaderContainer>
    <a href="/" target="_blank">
      <Logo />
    </a>
    <StyledRightGroup>
      <SearchWrapper>
        <Search {...props} />
      </SearchWrapper>
      <Button btnType="primary">
        Войти
      </Button>
    </StyledRightGroup>
  </StyledHeaderContainer>
);
