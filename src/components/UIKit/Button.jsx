import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';

const ButtonDefault = styled.button`
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const ButtonPrimary = ButtonDefault.extend`
  position: relative;
  height: 40px;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.6;
  padding: 4px 45px;
  background: linear-gradient(280deg, #bf1366, #ff0079);
  border: none;
  z-index: 100;

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
    background-image: linear-gradient(280deg, #ff0079, #bf1366);
    opacity: 0;
    transition: opacity 1s ease; 
  }

  &:hover {
    &::before{
      opacity: 1;
    }
  }
`;

const ButtonPrimaryPopup = ButtonPrimary.extend`
  background-image: linear-gradient(281deg, #a60050, #cc146d);
  box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.5);

  &:before {
    background-image: linear-gradient(281deg, #cc146d, #a60050);
  }
`;

const ButtonFavourite = ButtonDefault.extend`
  background-color: transparent;
  height: 32px;
  padding: 6px 20px 6px 40px;
  line-height: normal;
  border: 1px solid #fff;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  transition: all 1s ease;

  &::before {
    content: '♡';
    display: block;
    position: absolute;
    left: 15px;
    top: 4px;
    font-stretch: ultra-expanded;
    margin-right: 10px;
    color: #fff;
    transition: all 1s ease;
  }

  &:hover {
    color: #ff0079;
    border-color: #ff0079;

    &::before {
      color: #ff0079;
    }
  }
`;

const ButtonFavouritePopup = ButtonFavourite.extend`
  color: #494c62;
  border-color: #494c62;
  transition: all 0.3s ease;

  &::before {
    color: #494c62;
    transition: all 0.3s ease;
  }
`;

const ButtonFavouriteBig = ButtonFavourite.extend`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.6;
  height: 40px;
  padding: 4px 16px 4px 40px;

  &::before {
    font-weight: 600;
  }
`;

const ButtonFavouriteIn = ButtonFavourite.extend`
  &::before {
    top: 6px;
    color: #ff0079;
    content: '❤';
  }
`;

const ButtonFavouriteBack = ButtonFavourite.extend`
  &::before {
    content: '<';
    font-size: 20px;
    top: 2px;
    left: 20px;
  }
`;

export const ButtonP = ({ onClick, children }) => (
  <ButtonPrimary onClick={onClick}>{children}</ButtonPrimary>
);

export const ButtonPP = ({ onClick, children }) => (
  <ButtonPrimaryPopup onClick={onClick}>{children}</ButtonPrimaryPopup>
);

export const ButtonF = ({ onClick, children }) => (
  <ButtonFavourite onClick={onClick}>{children}</ButtonFavourite>
);

export const ButtonFP = ({ onClick, children }) => (
  <ButtonFavouritePopup onClick={onClick}>{children}</ButtonFavouritePopup>
);

export const ButtonFB = ({ onClick, children }) => (
  <ButtonFavouriteBig onClick={onClick}>{children}</ButtonFavouriteBig>
);

export const ButtonFI = ({ onClick, children }) => (
  <ButtonFavouriteIn onClick={onClick}>{children}</ButtonFavouriteIn>
);

export const ButtonFBack = ({ onClick, children }) => (
  <ButtonFavouriteBack onClick={onClick}>{children}</ButtonFavouriteBack>
);
