import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Main } from '$components/UIKit/Main';
import { Footer } from '$components/UIKit/Footer';
import { SmallText } from '$components/UIKit/Typography';

const stories = storiesOf('UIKit/Main', module);
const text = '2018, Все права защищены';

const Header = () => (
  <div>Header</div>
);

/* Styles for sticky footer */
const StyledContent = styled.div`
  display: flex;
  flex: 1;
`;

const Content = () => (
  <StyledContent>Content</StyledContent>
);

stories.addWithJSX('Main', () => (
  <Main>
    <Header />
    <Content />
    <Footer>
      <SmallText>{text}</SmallText>
    </Footer>
  </Main>
));
