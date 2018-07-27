import React from 'react';
import styled from 'styled-components';


const Preload = styled.div`

`;

export const Preloader = ({ onClick, children }) => (
  <Preload onClick={onClick}>
    <div className="rectangle-wr">
      <div className="" />
      <div className="" />
      <div className="" />
      <div className="" />
      <div className="" />
      <div className="" />
    </div>
    <span>{children}</span>
  </Preload>
);
