import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router';

import { UserContainer } from './User';
import { Header } from './Header';
import { MoviePageContainer } from '../containers/MoviePageContainer';
import { FrontPage } from '../components/FrontPage';
import { Footer } from './UIKit/Footer';
import { SmallText } from './UIKit/Typography';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Styles for sticky footer
const StyledContent = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 120px);
`;

const Component = () => (
  <StyledContent>
    <FrontPage />
  </StyledContent>
);

export const Main = () => (
  <StyledMain>
    <Header />
    <Switch>
      <Route exact path="/" component={Component} />
      <Route path="/movie/:id" component={MoviePageContainer} />
      <Route path="/user" component={UserContainer} />
    </Switch>
    <Footer>
      <SmallText>2018, Все права защищены</SmallText>
    </Footer>
  </StyledMain>
);
