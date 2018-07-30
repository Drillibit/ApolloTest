import React from 'react';
import styled from 'styled-components';


const Preload = styled.div`
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
  
  .rectangle-wr {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 28px;

    .rectangle {
      border-radius: 15px;
      background-color: #ff0079;
      width: 10px;
      margin-left: 8px;
    }

    .rectangle-1 {
      height: 24px;
      animation: change-height-1 1s ease infinite;
    }
    .rectangle-2 {
      height: 38px;
      animation: change-height-2 1s 0.5s ease infinite;
    }
    .rectangle-3 {
      height: 50px;
      animation: change-height-3 0.8s ease infinite;
    }
    .rectangle-4 {
      height: 34px;
      animation: change-height-4 0.8s ease infinite;
    }
    .rectangle-5 {
      height: 50px;
      animation: change-height-3 0.8s 0.5s ease infinite;
    }
    .rectangle-6 {
      height: 34px;
      animation: change-height-4 0.8s 0.5s ease infinite;
    }
  }

  .message-wr {
    display: block;
    text-align: center;
    height: 38px;
    color: #babbc3;
    font-size: 30px;
    font-weight: 600;
    line-height: normal;
    font-family: 'Source Sans Pro', sans-serif;
    text-indent: 10px;
  }
`;

export const Preloader = ({ onClick, children }) => (
  <Preload onClick={onClick}>
    <div className="rectangle-wr">
      <div className="rectangle rectangle-1" />
      <div className="rectangle rectangle-2" />
      <div className="rectangle rectangle-3" />
      <div className="rectangle rectangle-4" />
      <div className="rectangle rectangle-5" />
      <div className="rectangle rectangle-6" />
    </div>
    <span className="message-wr">{children}</span>
  </Preload>
);
