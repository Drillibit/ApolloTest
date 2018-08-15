import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  display: flex;
  min-height: 76vh;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const MainPage = () => (
  <StyledMain>
    <p>Main Page!</p>
  </StyledMain>
);
