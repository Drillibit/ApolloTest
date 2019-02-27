import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';

import { Icon } from '../UIKit/Icon';
import { Button } from '../UIKit/Button';

const VideoWrapper = styled.div`
  color: black;
  position: relative;
  height: 0;
  width: 100%;
  border-radius: 2px;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 284px;
  z-index: 1;
  border-radius: 2px;
`;

const StyledPreload = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top:0;
  left: 0;
  width: 100%;
  height: 284px;
  background-color: black;
  border-radius: 2px;
`;
type StyledOveralyType = {
  bg: string
}
const StyledOveraly = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top:0;
  left: 0;
  width: 100%;
  height: 284px;
  background-color: black;
  background-image: 
   url('${({ bg }:StyledOveralyType) => `https://image.tmdb.org/t/p/original${bg}`}');
  background-size: cover;
  z-index: 10;
  border-radius: 2px;
`;
export type MoviePlayerProps = {
  link: string,
  image: string,
  playing: boolean,
  onPlay: () => void
}

export class MoviePlayer extends PureComponent<MoviePlayerProps> {
  render() {
    const {
      link,
      image,
      playing,
      onPlay
    } = this.props;

    return (
      <VideoWrapper>
        {!playing && (
          <StyledOveraly bg={image}>
            <Button btnType="primary" btnSize="middle" onClick={onPlay}>
              <Icon size="sm" color="#fff" icon="play" />
              Смотреть трейлер
            </Button>
          </StyledOveraly>
        )}
        {playing && (
          <Fragment>
            <StyledPreload />
            <StyledIframe
              id="ytplayer"
              src={`http://www.youtube.com/embed/${link}?autoplay=1`}
              frameBorder="0"
              allowFullScreen
            />
          </Fragment>
        )}
      </VideoWrapper>
    );
  }
}