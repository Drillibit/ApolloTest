import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';

import { Icon } from '../UIKit/Icon';
import { Button } from '../UIKit/Button';

const VideWrapper = styled.div`
  position: relative;
  padding-bottom: 20rem;
  height: 0;
  width: 100%;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 284px;
  z-index: 1;
`;

const StyledPreload = styled.div`
  color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const StyledOveraly = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top:0;
  left: 0;
  width: 100%;
  height: 284px;
  background-image: 
   url('${({ bg }) => `https://image.tmdb.org/t/p/original${bg}`}');
  background-size: cover;
  z-index: 10;
`;

export class MoviePlayer extends Component {
  state = {
    playing: false
  };

  componentDidMount() {
    console.log('Mount');
  }
  onPlay = () => {
    this.setState({
      playing: true
    });
  };

  render() {
    const { link, image } = this.props;
    const { playing } = this.state;
    return (
      <VideWrapper>
        {!playing && (
          <StyledOveraly bg={image}>
            <Button btnType="primary" btnSize="middle" onClick={this.onPlay}>
              <Icon icon="play" />
              Смотреть трейлер
            </Button>
          </StyledOveraly>
        )}
        {playing && (
          <Fragment>
            <StyledPreload>
              <StyledIframe
                id="ytplayer"
                type="text/html"
                src={`http://www.youtube.com/embed/${link}?autoplay=1`}
                frameBorder="0"
              />
            </StyledPreload>
          </Fragment>
        )}
      </VideWrapper>
    );
  }
}

MoviePlayer.propTypes = {
  link: string,
  image: string
};

MoviePlayer.defaultProps = {
  link: '/',
  image: '/'
};
