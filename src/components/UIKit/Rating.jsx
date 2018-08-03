import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Icon } from './Icon';

// Colors
const lightOne = css`
  color: #fff;
`;

const lightTwo = css`
  opacity: 0.87;
  color: #fff;
`;

const dark = css`
  color: #949494;
`;

const mainStarColor = css`
  color: #ff0079;
`;
//
const StyledRatingContainer = styled.div`
  min-width: 27px;
  font-size: 24.5px;
  height: 25px;
  position: relative;
  display: flex;
  padding: 0;
  margin: 0 4px;
`;

const StyledRatingTop = styled.div`
 ${mainStarColor}
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const StyledIcon = styled(Icon)`
   ${mainStarColor}
`;

const StyledRatingBottom = StyledRatingTop.extend`
  display: block;
  width: ${({ width }) => `${width}%`};
`;

const GenericStar = styled(Icon)`
 ${mainStarColor}
  font-size: 25px;
  margin: 0 4px;
`;

const StyledRaitngMainLg = css`
  transform: scale(1);
`;

const StyledRaitngMain = styled.div`
  display: flex;
  align-items: center;
  transform: scale(0.6);
  ${({ size }) => (size === 'lg' ? StyledRaitngMainLg : '')}
`;

const StyledVoteCountLg = css`
  width: 86px;
  height: 18px;
  font-size: 14px;
  ${lightTwo}
`;

const StyledVoteCount = styled.span`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-left: 16px;
  ${dark}
  ${({ size }) => (size === 'lg' ? StyledVoteCountLg : '')}
`;

const StyledRateHeader = styled.h3`
  font-size: 14px;
  line-height: 1.14;
  margin-right: 8px;
  letter-spacing: normal;
  ${lightOne}
`;

const StyledRateNumber = styled.span`
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  margin-left: 2px;
  ${lightOne};
`;

const StyledRate = styled.div`
  display: flex;
  align-items: baseline;
  margin-right: 10px;
`;
const rateConvert = (rate) => {
  const num = parseFloat(rate) / 2;
  const restNum = num % 1;

  return {
    stars: new Array(Math.floor(num)).fill(),
    singleStar: restNum.toFixed(2) * 100,
    rate: num.toFixed(1),
    emptyStars: new Array(4 - Math.floor(num)).fill()
  };
};

export const Rating = ({ voteAverage, voteCount, size }) => {
  const {
    stars, singleStar, rate, emptyStars
  } = rateConvert(voteAverage);
  return (
    <StyledRaitngMain size={size}>
      {size === 'lg' && (
      <StyledRate>
        <StyledRateHeader>Рейтинг</StyledRateHeader>
        <StyledRateNumber>{rate}</StyledRateNumber>
      </StyledRate>)}
      {stars.map((_val, index) => (
        <GenericStar icon="star-fill" key={index} />
          ))}
      {singleStar > 0 && (
        <StyledRatingContainer>
          <StyledRatingTop>
            <Icon icon="star" />
          </StyledRatingTop>
          <StyledRatingBottom width={singleStar}>
            <StyledIcon icon="star-fill" />
          </StyledRatingBottom>
        </StyledRatingContainer>
        )}
      {size === 'lg' && emptyStars.map((_val, index) => (
        <GenericStar icon="star" key={index} />
      ))}
      <StyledVoteCount size={size} >{voteCount} отзывов</StyledVoteCount>
    </StyledRaitngMain>
  );
};

Rating.propTypes = {
  size: PropTypes.string,
  voteCount: PropTypes.number,
  voteAverage: PropTypes.number
};

Rating.defaultProps = {
  size: 'md',
  voteAverage: 0,
  voteCount: 0
};
