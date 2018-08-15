import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 76vh;
`;

export const Content = () => (
  <StyledContainer>
    <p>Годный контент</p>
  </StyledContainer>
);
