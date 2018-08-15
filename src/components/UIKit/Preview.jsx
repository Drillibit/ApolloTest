import React, { PureComponent } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { H3, SmallText } from './Typography';
import { colors } from '../helpers/colors';
import { Rating } from './Rating';
import { Button, StyledButton } from './Button';
import { Icon } from './Icon';
import { FavouriteButton } from '../FavouriteButton';

const StyledCustomBtn = styled(StyledButton)`
  padding: 4px 43px;
`;

const StyledParent = styled.div`
  position: relative;
  width: 282px;
  height: 284px;
`;

const StyledPreviewContainerOpen = css`
  z-index: 10;
  right: -67px;
  width: 412px;
  height: 526px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41),
    0 2px 9px 1px rgba(0, 0, 0, 0.28);
`;

const StyledPreviewContainer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 282px;
  height: 284px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all ease 0.3s;
  z-index: 0;
  ${({ open }) => (open ? StyledPreviewContainerOpen : '')};
`;

const StyledHeaderClose = css`
  transform: translateX(-500px);
  display: none;
`;

const StyledHeader = H3.extend`
  color: ${colors.grey500};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 16px 12px 2px 12px;
  transition: transform ease .3s;
  ${({ open }) => (open ? StyledHeaderClose : '')}
  display: ${setTimeout(() => 'none', 1000)};
`;

const BgAnimation = keyframes`
  0% {height: 70%},
  25% {height: 65%},
  50% {height: 60%},
  75% {height: 55%},
  100% {height: 50%}
`;
const BgKeeperMove = css`
  transform: translateY(-10%);
  min-height: 50%;
  min-height: 250px;
  animation: ${BgAnimation} 0.3s ease-in;
`;

const BgKeeper = styled.div`
  width: 100%;
  flex: 2;
  border-radius: 0 0 2px 2px;
  transition: all ease-in-out .4s;
  background-image: url('${({ bg }) => bg}');
  background-size: cover;
  ${({ open }) => (open ? BgKeeperMove : '')}
`;

const RatingMove = css`
  transform: translateX(600px);
`;

const RatingContainer = styled.div`
  transition: transform ease 0.3s;
  margin-bottom: 11px;
  ${({ open }) => (open ? RatingMove : '')};
`;

const StyledInfoContainerMove = css`
  max-height: 256px;
  display: flex;
  flex-direction: column;
`;

const StyledInfoContainer = styled.div`
  display: none;
  transform: all ease 0.3s;
  padding: 0 16px 14px 16px;
  transition: height 0.3s linear;
  overflow: hidden;
  min-width: 412px;
  ${({ open }) => (open ? StyledInfoContainerMove : '')};
`;

const StyledHeaderInfo = H3.extend`
  color: ${colors.grey500};
  width: 100%;
`;

const StyledSmallInfo = styled.span`
  color: ${colors.grey200};
  font-size: 14px;
  margin-right: 10px;
`;

const StyledDigitContainer = styled.div`
  display: flex;
`;

const StyledDetails = styled.div`
  display: flex;
  margin: 7px 0;
  align-items: baseline;
`;

const StyledDetailsText = SmallText.extend`
  color: ${colors.grey500};
`;

const StyledDetailsHeader = StyledSmallInfo.extend`
  min-width: 60px;
`;

const StyledParagraph = StyledDetailsText.extend`
  max-height: 38px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export class Preview extends PureComponent {
  static propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    bg: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    pg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    genre: PropTypes.string,
    cast: PropTypes.string
  };

  static defaultProps = {
    description: '',
    title: '',
    bg: '',
    duration: '',
    year: '',
    pg: '',
    genre: '',
    cast: ''
  };

  state = {
    inOpenState: false
  };

  handleDisplay = () => {
    this.timeOut = setTimeout(() => {
      this.setState({
        inOpenState: true
      });
    }, 1000);
  };

  handleHide = () => {
    this.setState({
      inOpenState: false
    });
    clearTimeout(this.timeOut);
  };

  render() {
    const { inOpenState } = this.state;
    const {
      description,
      title,
      year,
      bg,
      duration,
      pg,
      genre,
      cast,
      isFavourite,
      toggleFavourite,
    } = this.props;

    return (
      <StyledParent>
        <StyledPreviewContainer
          onMouseEnter={this.handleDisplay}
          onMouseLeave={this.handleHide}
          open={inOpenState}
        >
          <StyledHeader open={inOpenState}>{title}</StyledHeader>
          <RatingContainer open={inOpenState}>
            <Rating {...this.props} />
          </RatingContainer>
          <BgKeeper open={inOpenState} bg={bg} />
          <StyledInfoContainer open={inOpenState}>
            <StyledHeaderInfo>{title}</StyledHeaderInfo>
            <StyledDigitContainer>
              <StyledSmallInfo>{year}</StyledSmallInfo>
              <StyledSmallInfo>
                {duration} {duration && 'мин'}
              </StyledSmallInfo>
              <StyledSmallInfo>{pg}</StyledSmallInfo>
            </StyledDigitContainer>
            {genre && (
              <StyledDetails>
                <StyledDetailsHeader>Жанр:</StyledDetailsHeader>
                <StyledDetailsText>{genre}</StyledDetailsText>
              </StyledDetails>
            )}
            {cast && (
              <StyledDetails>
                <StyledDetailsHeader>В ролях:</StyledDetailsHeader>
                <StyledDetailsText>{cast}</StyledDetailsText>
              </StyledDetails>
            )}
            <StyledDetails>
              <StyledParagraph>
                {description.length > 90
                  ? `${description.slice(0, 90)}...`
                  : description}
              </StyledParagraph>
            </StyledDetails>
            <ButtonContainer>
              <FavouriteButton
                btnType="transparent-dark"
                isFavourite={isFavourite}
                onClick={toggleFavourite}
              />
              <StyledCustomBtn btnType="primary" onClick={this.handleHide}>
                Подробнее
              </StyledCustomBtn>
            </ButtonContainer>
          </StyledInfoContainer>
        </StyledPreviewContainer>
      </StyledParent>
    );
  }
}
