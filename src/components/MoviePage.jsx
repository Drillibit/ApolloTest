import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { StyledGrid, StyledRow, StyledCol } from './helpers/grid';
import { MoviePlayer } from './MoviePlayer';
import { StyledButton } from './UIKit/Button';
import { Quote } from './UIKit/Quote';

const StyledContainer = styled.div`
  min-height: 76vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-100%);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const MoviePage = () => (
  <StyledContainer>
    <StyledLink to="/">Back!</StyledLink>
  </StyledContainer>
);
