import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes, { func } from 'prop-types';

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


const RectangleWr = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 28px;
`;

const MessageWr = styled.div`
  display: block;
  text-align: center;
  height: 38px;
  color: #babbc3;
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  font-family: 'Source Sans Pro', sans-serif;
  text-indent: 10px;
`;

const Rectangle = styled.div`
  border-radius: 15px;
  background-color: #ff0079;
  width: 10px;
  margin-left: 8px;
`;

const RectangleOne = Rectangle.extend`
  height: 24px;
  animation: change-height-1 1s ease infinite;
`;

const RectangleTwo = Rectangle.extend`
  height: 38px;
  animation: change-height-2 1s 0.5s ease infinite;
`;

const RectangleThree = Rectangle.extend`
  height: 50px;
  animation: change-height-3 0.8s ease infinite;
`;

const RectangleFour = Rectangle.extend`
  height: 34px;
  animation: change-height-4 0.8s ease infinite;
`;

const RectangleFive = Rectangle.extend`
  height: 50px;
  animation: change-height-3 0.8s 0.5s ease infinite;
`;

const RectangleSix = Rectangle.extend`
  height: 34px;
  animation: change-height-4 0.8s 0.5s ease infinite;
`;

const Preload = styled.div`
  ${keyframes};
`;

export const Preloader = ({ onClick, children }) => (
  <Preload onClick={onClick}>
    <RectangleWr>
      <RectangleOne />
      <RectangleTwo />
      <RectangleThree />
      <RectangleFour />
      <RectangleFive />
      <RectangleSix />
    </RectangleWr>
    <MessageWr>{children}</MessageWr>
  </Preload>
);


Preloader.propTypes = {
  onClick: func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
};

Preloader.defaultProps = {
  onClick: f => f,
};
