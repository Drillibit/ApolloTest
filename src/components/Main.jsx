import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Footer } from '$components/UIKit/Footer';
import { SmallText } from '$components/UIKit/Typography';
import { Header } from './Header';
import { FrontPageContainer } from '../containers/FrontPageContainer';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Styles for sticky footer
const StyledContent = styled.div`
  display: flex;
  flex: 1;
`;

const Content = () => (
  <StyledContent />
);

export const Main = () => (
  <StyledMain>
    <Header />
    
    <FrontPageContainer />
    <Footer>
      <SmallText>2018, Все права защищены</SmallText>
    </Footer>
  </StyledMain>
);

Main.propTypes = {
};

Main.defaultProps = {
};
