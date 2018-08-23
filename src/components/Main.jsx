import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router';

import { Footer } from '$components/UIKit/Footer';
import { SmallText } from '$components/UIKit/Typography';
import { Header } from './Header';
import { FrontPageContainer } from '../containers/FrontPageContainer';
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
  height: calc(100vh - 120px);
`;

const Content = () => (
  <StyledContent />
);

export const Main = () => (
  <StyledMain>
    <Header />
    
    <StyledContent>
      <FrontPageContainer />
    </StyledContent>

    <Footer>
      <SmallText>2018, Все права защищены</SmallText>
    </Footer>
  </StyledMain>
);
