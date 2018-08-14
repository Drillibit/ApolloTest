import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Footer } from '$components/UIKit/Footer';
import { SmallText } from '$components/UIKit/Typography';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

/* Styles for sticky footer */
const StyledContent = styled.div`
  display: flex;
  flex: 1;
`;

const Header = () => (
  <div>Header</div>
);

const Content = () => (
  <StyledContent>Content</StyledContent>
);

const text = '2018, Все права защищены';

export const Main = () => (
  <StyledMain>
    <Header />
    <Content />
    <Footer>
      <SmallText>{text}</SmallText>
    </Footer>
  </StyledMain>
);

Main.propTypes = {
};

Main.defaultProps = {
};
