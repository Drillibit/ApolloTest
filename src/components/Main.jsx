import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router';

import { Footer } from '$components/UIKit/Footer';
import { SmallText } from '$components/UIKit/Typography';
import { Header } from './Header';
import { ConnectedFavourites } from '../containers/ConnectedFavourites';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Styles for sticky footer
const StyledContent = styled.div`
  display: flex;
  flex: 1;
  padding-bottom: 80px;
`;

// Mockup header
const StyledHeaderWrapper = styled.div`
  padding-bottom: 150px;
`;

export const Main = () => (
  <StyledMain>
    <StyledHeaderWrapper>
      <Header />
    </StyledHeaderWrapper>
    <StyledContent>
      <Switch>
        <Route path="/favourites" component={ConnectedFavourites} />
      </Switch>
    </StyledContent>
    <Footer>
      <SmallText>2018, Все права защищены</SmallText>
    </Footer>
  </StyledMain>
);
