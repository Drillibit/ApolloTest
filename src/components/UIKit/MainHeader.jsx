import React from 'react';
import styled from 'styled-components';

import { Logo } from './Logo';
import { Button } from './Button';

const StyledHeaderContainer = styled.div`
    display: flex;
    height: 109px;
    justify-content: space-between;
    align-items: center;
    padding: 0 98px 0 130px;
    background-image: linear-gradient(to bottom,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0) 100%);
`;
export const MainHeader = () => (
  <StyledHeaderContainer>
    <Logo />
    <Button
      btnType="primary"
    >
              Войти
    </Button>
  </StyledHeaderContainer>
);
