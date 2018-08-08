import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import bg from './tmp/mask.png';
import { MainHeader } from '../../src/components/UIKit/MainHeader';

const StyledContainer = styled.div`
  height: 500px;
  background-image: url(${bg});
`;

const stories = storiesOf('UIKit/MainHeader', module);

stories.addWithJSX('main', () => (
  <StyledContainer>
    <MainHeader />
  </StyledContainer>
));
