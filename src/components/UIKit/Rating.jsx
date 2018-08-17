import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { SmallText } from './Typography';
import { colors } from '../helpers/colors';
import { Icon } from './Icon';

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
  color: ${colors.purple};
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const StyledIcon = styled(Icon)`
   color: ${colors.purple};
`;

const StyledRatingBottom = StyledRatingTop.extend`
  display: block;
  width: ${({ width }) => `${width}%`};
`;

const GenericStar = styled(Icon)`
  color: ${colors.purple};
  font-size: 25px;
  margin: 0 4px;
`;

const StyledRaitngMain = styled.div`
  display: flex;
  align-items: center;
`;

const StyledVoteCountLg = css`
  height: 18px;
  font-size: 14px;
  opacity: .86;
  color: #fff;
`;

const StyledVoteCount = styled.span`
  font-size: 12px;
  margin-left: 10px;
  color: ${colors.grey200};
  ${({ size }) => (size === 'lg' ? StyledVoteCountLg : '')}
`;

const StyledRateHeader = SmallText.extend`
  margin-right: 8px;
  color: #fff;
`;

const StyledRateNumber = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-left: 2px;
  color: #fff;
`;

const StyledRate = styled.div`
  display: flex;
  align-items: baseline;
  margin-right: 10px;
`;

const StyledStarContainerLg = css`
  transform: scale(1);
`;

const StyledStarContainer = styled.div`
  display: flex;
  transform: scale(0.7);
  ${({ size }) => (size === 'lg' ? StyledStarContainerLg : '')}
`;
const rateConvert = (rate) => {
  const num = parseFloat(rate) / 2;
  const restNum = num % 1;
  return {
    stars: new Array(Math.floor(num)).fill(),
    singleStar: restNum.toFixed(2) * 100,
    rate: num.toFixed(1),
    emptyStars: new Array(num >= 5 ? 0 : 4 - Math.floor(num)).fill()
  };
};

export const Rating = ({
  className, voteAverage, voteCount, size
}) => {
  const {
    stars, singleStar, rate, emptyStars
  } = rateConvert(voteAverage);

  return (
    <StyledRaitngMain className={className}>
      <StyledStarContainer size={size}>
        {size === 'lg' && (
        <StyledRate>
          <StyledRateHeader>Рейтинг</StyledRateHeader>
          <StyledRateNumber>{rate}</StyledRateNumber>
        </StyledRate>)}
        {stars.map((_, index) => (
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
      </StyledStarContainer>
      {size === 'lg' && emptyStars.map((_, index) => (
        <GenericStar icon="star" key={index} />
      ))}
      <StyledVoteCount size={size} >{voteCount} отзывов</StyledVoteCount>
    </StyledRaitngMain>
  );
};

Rating.propTypes = {
  size: PropTypes.string,
  voteCount: PropTypes.number,
  voteAverage: PropTypes.number,
  className: PropTypes.string,
};

Rating.defaultProps = {
  size: 'md',
  voteAverage: 0,
  voteCount: 0,
  className: '',
};
