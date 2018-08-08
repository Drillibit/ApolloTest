import React, { PureComponent } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { H3, SmallText } from './Typography';
import { colors } from '../helpers/colors';
import { Rating } from './Rating';
import { Button } from './Button';
import { Icon } from './Icon';

const StyledPreviewContainerOpen = css`
  width: 412px;
  height: 526px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41), 0 2px 9px 1px rgba(0, 0, 0, 0.28);
`;

const StyledPreviewContainer = styled.div`
  overflow: hidden;
  width: 282px;
  height: 284px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all ease .3s;
  ${({ open }) => (open ? StyledPreviewContainerOpen : '')}
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
  animation: ${BgAnimation} .3s ease-in;
`;

const BgKeeper = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 0 0 2px 2px;
  transition: all ease-in-out .4s;
  ${({ open }) => (open ? BgKeeperMove : '')}
`;

const RatingMove = css`
  transform: translateX(600px);
`;

const RatingContainer = styled.div`
  transition: transform ease .3s;
  ${({ open }) => (open ? RatingMove : '')}
`;

const StyledInfoContainerMove = css`
  min-height: 256px;
  display: flex;
  flex-direction: column;
`;

const StyledInfoContainer = styled.div`
  max-height: 0;
  display: none;
  transform: all ease .3s;
  padding: 0 16px 14px 16px;
  transform: translateY(-24px);
  transition: height .3s linear;
  overflow: hidden;
  min-width: 412px;
  ${({ open }) => (open ? StyledInfoContainerMove : '')}
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
  text-overflow: ellipsis;
  max-height: 38px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

export class Preview extends PureComponent {
  static propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    bg: PropTypes.string,
    year: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    duration: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    pg: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
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
    this.timeOut = setTimeout(
      () => {
        this.setState({
          inOpenState: true
        });
      }, 1000
    );
  }

  handleHide = () => {
    this.setState({
      inOpenState: false
    });
    clearTimeout(this.timeOut);
  }

  render() {
    const { inOpenState } = this.state;
    const {
      description, title, bg, year, duration, pg, genre, cast
    } = this.props;

    return (
      <StyledPreviewContainer
        onMouseEnter={this.handleDisplay}
        onMouseLeave={this.handleHide}
        open={inOpenState}
      >
        <StyledHeader open={inOpenState}>{title}</StyledHeader>
        <RatingContainer open={inOpenState}>
          <Rating {...this.props} />
        </RatingContainer>
        <BgKeeper src={bg} alt="bg" open={inOpenState} />
        <StyledInfoContainer open={inOpenState}>
          <StyledHeaderInfo>{title}</StyledHeaderInfo>
          <StyledDigitContainer>
            <StyledSmallInfo>{year}</StyledSmallInfo>
            <StyledSmallInfo>{duration} мин</StyledSmallInfo>
            <StyledSmallInfo>{pg}</StyledSmallInfo>
          </StyledDigitContainer>
          <StyledDetails>
            <StyledDetailsHeader>Жанр:</StyledDetailsHeader>
            <StyledDetailsText>{genre}</StyledDetailsText>
          </StyledDetails>
          <StyledDetails>
            <StyledDetailsHeader>В ролях:</StyledDetailsHeader>
            <StyledDetailsText>{cast}</StyledDetailsText>
          </StyledDetails>
          <StyledDetails>
            <StyledParagraph>
              {description.length > 90 ? `${description.slice(0, 90)}...` : description}
            </StyledParagraph>
          </StyledDetails>
          <ButtonContainer>
            <Button
              btnType="transparent-dark"
              onClick={this.handleDisplay}
              btnSize="small"
            >
              <Icon icon="heart" />Избранное
            </Button>
            <Button
              btnType="primary"
              btnSize="small"
              onClick={this.handleHide}
            >
              Подробнее
            </Button>
          </ButtonContainer>
        </StyledInfoContainer>
      </StyledPreviewContainer>
    );
  }
}
