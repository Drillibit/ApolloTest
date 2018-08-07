import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Icon } from '../../src/components/UIKit/Icon';
import { Container } from '../helpers/Container';

const stories = storiesOf('UIKit/Icons', module);

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  font-size: 40px;
  padding: 10px;

  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }

  div {
    margin-top: 5px;
    font-size: 16px;
  }
`;

stories.addWithJSX('basic', () => (
  <Container>
    <IconWrapper>
      <Icon icon="heart" size="xl" color="red" /><div>heart</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="chevron-left" /><div>chevron-left</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="chevron-down" /><div>chevron-down</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="chevron-up" /><div>chevron-up</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="chevron-right" /><div>chevron-right</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="check" /><div>check</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="search" /><div>search</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="play" /><div>play</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="star" /><div>star</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="star-fill" /><div>star-fill</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="heart-fill" /><div>heart-fill</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="facebook" /><div>facebook</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="twitter" /><div>twitter</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="google-plus" /><div>google-plus</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="quote" /><div>quote</div>
    </IconWrapper>
    <IconWrapper>
      <Icon icon="close" /><div>close</div>
    </IconWrapper>
  </Container>
));

