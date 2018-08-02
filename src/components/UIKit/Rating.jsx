import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Icon } from './Icon';

const StyledRatingContainer = styled.div`
  color: #ff0079;
  max-width: 25px;
  font-size: 25px;
  height: 25px;
  width: 100px;
  margin: 0 auto;
  position: relative;
  padding: 0;
`;

const StyledRatingTop = styled.div`
  color: #ff0079;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const StyledRatingBottom = StyledRatingTop.extend`
  padding: 0;
  display: block;
  z-index: 0;
`;

export const Rating = props => (
  <StyledRatingContainer>
    <StyledRatingTop>
      <Icon icon="star" />
    </StyledRatingTop>
    <StyledRatingBottom>
      <Icon icon="star-fill" />
    </StyledRatingBottom>
  </StyledRatingContainer>
);
