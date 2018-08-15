import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { searchById } from '../redux/movies/actions';
import { StyledGrid, StyledRow, StyledCol } from './helpers/grid';
import { MoviePlayer } from './MoviePlayer';
import { StyledButton } from './UIKit/Button';
import { Quote } from './UIKit/Quote';

const ContainerAnimation = keyframes`
  from {transform: translateX(-100%)},
  to {transform: translateX(0)}
`;

const StyledContainer = styled.div`
  min-height: 87vh;
  background-color: deepskyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: translateX(-100%); */
  animation: ${ContainerAnimation} .4s ease-in;
`;

const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
`;

export class MoviePage extends Component {
  componentDidMount() {
   const { searchById } = this.props;

   searchById(this.props.match.params.id);
  }

  render() {
    return (
      <StyledContainer>
        <StyledLink to="/">Back!</StyledLink>
      </StyledContainer>
    );
  }
}
