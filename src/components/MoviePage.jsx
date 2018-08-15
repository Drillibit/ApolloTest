import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: translateX(-100%) */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const MoviePage = () => (
  <StyledContainer>
    <StyledLink to="/">Back!</StyledLink>
  </StyledContainer>
);
