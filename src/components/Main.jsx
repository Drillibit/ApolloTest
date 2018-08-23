import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router';

import { Content } from './Content';
import { Header } from './Header';
import { MoviePageContainer } from '../containers/MoviePageContainer';
import { ConnectedFavourites } from '../containers/ConnectedFavourites';
import { Footer } from './UIKit/Footer';
import { SmallText } from './UIKit/Typography';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = () => (
  <StyledMain>
    <Header />
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/movie/:id" component={MoviePageContainer} />
      <Route path="/favourites" component={ConnectedFavourites} />
    </Switch>
    <Footer>
      <SmallText>2018, Все права защищены</SmallText>
    </Footer>
  </StyledMain>
);
