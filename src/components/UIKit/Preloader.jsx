import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const rectlist = [
  { id: 1, height: '24px', animation: 'change-height-1 1s ease infinite' },
  { id: 2, height: '38px', animation: 'change-height-2 1s 0.5s ease infinite' },
  { id: 3, height: '50px', animation: 'change-height-3 0.8s ease infinite' },
  { id: 4, height: '34px', animation: 'change-height-4 0.8s ease infinite' },
  { id: 5, height: '50px', animation: 'change-height-3 0.8s 0.5s ease infinite' },
  { id: 6, height: '34px', animation: 'change-height-4 0.8s 0.5s ease infinite' },
];

const keyframes = css`
  @keyframes change-height-1{
    50% {
      height: 50px;
    }
  }
  @keyframes change-height-2{
    50% {
      height: 70px;
    }
  }
  @keyframes change-height-3{
    50% {
      height: 25px;
    }
  }
  @keyframes change-height-4{
    50% {
      height: 65px;
    }
  }
`;

const RectWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 28px;
`;

const MsgWrapper = styled.div`
  display: block;
  text-align: center;
  height: 38px;
  color: #babbc3;
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  text-indent: 10px;
`;

const Rectangle = styled.div`
  border-radius: 15px;
  background-color: #ff0079;
  width: 10px;
  margin-left: 8px;
  height: ${height => (height : 'auto')};
  animation: ${animation => (animation : 'none')};
`;

const Preload = styled.div`
  ${keyframes};
`;

export const Preloader = ({ children }) => (
  <Preload>
    <RectWrapper>
      {
        rectlist.map(({ id, height, animation }) =>
          <Rectangle key={id} height={height} animation={animation} />)
      }
    </RectWrapper>
    <MsgWrapper>{children}</MsgWrapper>
  </Preload>
);

Preloader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
};
