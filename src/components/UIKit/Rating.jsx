import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Icon } from './Icon';

const StyledRatingContainer = styled.div`
  color: #ff0079;
  max-width: 27px;
  font-size: 24.5px;
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

const StyledIcon = styled(Icon)`
    color: #ff0079;
`;

const StyledRatingBottom = StyledRatingTop.extend`
  display: block;
  width: ${({ width }) => `${width}%`};
  /* width: ${({ width }) => `${width}%`}; */
`;

const WholeStars = styled.div`
  display: flex;
`;

const WholeStar = styled(Icon)`
  color: #ff0079;
  font-size: 25px;
`;

const StyledRaitngMain = styled.div`
  display: flex;
`;
const rateConvert = (rate) => {
  const num = parseFloat(rate) / 2;
  const restNum = num % 1;
  return { stars: new Array(Math.floor(num)).fill(), singleStar: restNum.toFixed(2) * 100 };
};

export const Rating = ({ rating }) => {
  const { stars, singleStar } = rateConvert(rating);
  return (
    <StyledRaitngMain>
      <WholeStars>
        {stars.map(val => (
          <WholeStar icon="star-fill" key={val} />
          ))}
      </WholeStars>
      <StyledRatingContainer>
        {singleStar > 0 && (
        <Fragment>
          <StyledRatingTop>
            <Icon icon="star" />
          </StyledRatingTop>
          <StyledRatingBottom width={singleStar}>
            <StyledIcon icon="star-fill" />
          </StyledRatingBottom>
        </Fragment>
        )}
      </StyledRatingContainer>
    </StyledRaitngMain>
  );
};
