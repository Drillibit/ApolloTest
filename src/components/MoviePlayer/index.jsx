import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const VideWrapper = styled.div`
  position: relative;   
  padding-bottom: 20rem; 
  height: 0;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MoviePlayer = ({ id }) => (
  <VideWrapper>
    <StyledIframe
      title={id}
      key={id}
      id="ytplayer"
      type="text/html"
      src="http://www.youtube.com/embed/_xBziiJI3DU?1"
      frameBorder="0"
    />
  </VideWrapper>);

MoviePlayer.propTypes = {
  id: PropTypes.number.isRequired
};
