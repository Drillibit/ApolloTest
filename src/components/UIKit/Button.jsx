import React from 'react';
import styled, { css } from 'styled-components';

const buttonDefault = css`
  position: relative;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  text-transform: uppercase;
`;

const primary = css`
  border: none;
  z-index: 100; ${''/* Для хака с анимацией linear-gradient */}

  &::before {
    content: '';
    display: block;
    position: absolute;
    border-radius: inherit;
    z-index: -100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease; 
  }

  &:hover {
    &::before{
      opacity: 1;
    }
  }
`;

const typePrimary = css`
  ${primary}
  background-image: linear-gradient(280deg, #bf1366, #ff0079);

  &::before {
    background-image: linear-gradient(280deg, #ff0079, #bf1366);
  }
`;

const typePrimaryDark = css`
  ${primary}
  background-image: linear-gradient(280deg, #a60050, #cc146d);

  &::before {
    background-image: linear-gradient(280deg, #cc146d, #a60050);
  }
`;

const typeTransparent = css`
  border: 1px solid #fff;
  background: transparent;
`;

const sizeSmall = css`
  height: 32px;
  padding: 6px 16px;
  font-size: 16px;
  font-weight: normal;
`;

const sizeMiddle = css`
  height: 40px;
  padding: 4px 20px;
  font-size: 20px;
  font-weight: 600;
`;

const sizeBig = css`
  height: 48px;
  padding: 8px 40px;
  font-size: 20px;
  font-weight: 600;
`;

const colorWhite = css`
  color: #fff;
  border-color: #fff;
`;

const colorDark = css`
  color: #494c62;
  border-color: #494c62;
`;

const shadow = css`
  box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.5);
`;

const ButtonStyles = styled.button`
  ${buttonDefault}

  ${(props) => {
    switch (props.type) {
      case 'primary':
        return typePrimary;
      case 'primary-dark':
        return typePrimaryDark;
      default:
        return typeTransparent;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case 'small':
        return sizeSmall;
      case 'big':
        return sizeBig;
      default:
        return sizeMiddle;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case 'dark':
        return colorDark;
      default:
        return colorWhite;
    }
  }}

  ${(props) => props.shadow ? shadow : ''}
  
`;

export const Button = ({ type, size, color, shadow, onClick, children }) => (
  <ButtonStyles onClick={onClick} type={type} size={size} color={color} shadow={shadow}>{children}</ButtonStyles>
);

