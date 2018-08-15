import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 87vh;
`;

export const Content = () => (
  <StyledContainer>
    <p>Годный контент</p>
  </StyledContainer>
);
