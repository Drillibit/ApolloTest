import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Icon } from './Icon';

const StyledRatingContainer = styled.div`
  color: #ff0079;
  max-width: 27px;
  font-size: 24.5px;
  height: 25px;
  position: relative;
  display: flex;
  min-width: 160px;
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
`;

const WholeStar = styled(Icon)`
  color: #ff0079;
  font-size: 25px;
  margin: 0 4px;
`;
const StyledRaitngMainLg = css`
  transform: scale(1);
  min-width: 368px;
  height: 48px;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background-color: rgba(73, 76, 98, 0.2);
  border: solid 2px rgba(255, 255, 255, 0.2);
  justify-content: space-around;
  padding: 0 16px;
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
  opacity: 0.87;
  font-size: 14px;
  color: #ffffff;
`;

const StyledVoteCount = styled.span`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #949494;
  margin-left: 28px;
  ${({ size }) => (size === 'lg' ? StyledVoteCountLg : '')}
`;

const StyledRateHeader = styled.h3`
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: normal;
  color: #ffffff;
`;

const StyledRateNumber = styled.span`
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #ffffff;
  margin-left: 2px;
`;

const StyledRate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`;
const rateConvert = (rate) => {
  const num = parseFloat(rate) / 2;
  const restNum = num % 1;
  return { stars: new Array(Math.floor(num)).fill(), singleStar: restNum.toFixed(2) * 100, rate: num.toFixed(1) };
};

export const Rating = ({ voteAverage, voteCount, size }) => {
  const { stars, singleStar, rate } = rateConvert(voteAverage);
  return (
    <StyledRaitngMain size={size}>
      <StyledRate>
        <StyledRateHeader>Рейтинг</StyledRateHeader>
        <StyledRateNumber>{rate}</StyledRateNumber>
      </StyledRate>
        <StyledRatingContainer>
        {stars.map((_val, index) => (
          <WholeStar icon="star-fill" key={index} />
          ))}
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
