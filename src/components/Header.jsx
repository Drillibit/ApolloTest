import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Subscription } from 'react-apollo';

import { Logo } from './UIKit/Logo';
import { ADDED_FAVOURITE } from './Requests/subscription';
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

const FavouriteStyled = styled.div`
  display: flex;
`;

const TextStyled = styled.p`
  color: #fff;
`;

export const Header = props => (
  <StyledHeaderContainer>
    <StyledGrid>
      <StyledRow middle="xs">
        <StyledCol xs={6} md={4} lg={6}>
          <Link to="/">
            <Logo />
          </Link>
        </StyledCol>
        <StyledCol marginLeft="auto" xs={6} md={8} lg={6}>
          <StyledRightGroup>
            <SearchContainer {...props} />
            <FavouriteStyled>
              <Subscription subscription={ADDED_FAVOURITE}>
                {({ data, loading }) => (
                  <ul>
                    New favourite{' '}
                    {!loading &&
                      data.addFavourite.favouriteMovies.map(({ _id }) => (
                        <li key={_id}>
                          <TextStyled>{_id}</TextStyled>
                        </li>
                      ))}
                  </ul>
                )}
              </Subscription>
            </FavouriteStyled>
          </StyledRightGroup>
        </StyledCol>
      </StyledRow>
    </StyledGrid>
  </StyledHeaderContainer>
);
