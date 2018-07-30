import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes, { func } from 'prop-types';

const buttonDefault = css`
  position: relative;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  text-transform: uppercase;

  &:disabled {
    opacity: 0.7;

    &::before {
      display: none;
    }
  }
`;

const typePrimaryStyles = css`
  border: none;
  z-index: 100; ${''/* Для хака с анимацией linear-gradient */}
  background-image: linear-gradient(280deg, #bf1366, #ff0079);
  color: #fff;

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
    background-image: linear-gradient(280deg, #a60050, #cc146d);
  }

  &:hover {
    &::before{
      opacity: 1;
    }
  }
`;

const typeTransparentWhiteStyles = css`
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
`;

const typeTransparentDarkStyles = css`
  border: 1px solid #494c62;
  background: transparent;
  color: #494c62;
`;

const sizeSmallStyles = css`
  height: 32px;
  padding: 6px 16px;
  font-size: 16px;
  font-weight: normal;
`;

const sizeMiddleStyles = css`
  height: 40px;
  padding: 4px 20px;
  font-size: 20px;
  font-weight: 600;
`;

const sizeBigStyles = css`
  height: 48px;
  padding: 8px 40px;
  font-size: 20px;
  font-weight: 600;
`;

const shadowStyles = css`
  box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.5);
`;

const StyledButton = styled.button`
  ${buttonDefault}

  ${(props) => {
    switch (props.btnType) {
      case 'primary':
        return typePrimaryStyles;
      case 'transparent-dark':
        return typeTransparentDarkStyles;
      default:
        return typeTransparentWhiteStyles;
    }
  }}

  ${(props) => {
    switch (props.btnSize) {
      case 'small':
        return sizeSmallStyles;
      case 'big':
        return sizeBigStyles;
      default:
        return sizeMiddleStyles;
    }
  }}

  ${({ btnShadow }) => btnShadow && shadowStyles}
`;

export const Button = ({
  btnType, btnSize, btnShadow, disabled, onClick, children
}) => (
  <StyledButton
    btnType={btnType}
    btnSize={btnSize}
    btnShadow={btnShadow}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  btnSize: PropTypes.string.isRequired,
  btnShadow: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: func,
};

Button.defaultProps = {
  onClick: f => f,
};

