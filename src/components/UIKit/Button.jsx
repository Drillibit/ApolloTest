import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes, { func } from 'prop-types';

const buttonDefault = css`
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  text-transform: uppercase;
  outline: none;
  line-height: 1;

  &>.svg-inline--fa {
    margin-right: 10px;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;

    &::before {
      display: none;
    }
  }
`;

const typePrimaryStyles = css`
  border: none;
  z-index: 100;
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

const transparentStyles = css`
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  transition: all 0.5s ease;

  &:hover {
    color: #ff0079;
    border-color: #ff0079;
  }
`;

const typeTransparentWhiteStyles = css`
  ${transparentStyles};
`;

const typeTransparentDarkStyles = css`
  ${transparentStyles};

  border-color: #494c62;
  color: #494c62;
`;

const sizeSmallStyles = css`
  height: 32px;
  padding: 7px 16px;
  font-size: 16px;
  font-weight: normal;

  &>.svg-inline--fa {
    margin-right: 8px;
  }
  
  &>.fa-heart[data-prefix='fas']{
    color: #ff0079;
  }
`;

const sizeMiddleStyles = css`
  height: 40px;
  padding: 9px 20px;
  font-size: 20px;
  font-weight: 600;
`;

const sizeBigStyles = css`
  height: 48px;
  padding: 10px 40px;
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
  btnType: PropTypes.string,
  btnSize: PropTypes.string,
  btnShadow: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  disabled: PropTypes.bool,
  onClick: func,
};

Button.defaultProps = {
  onClick: f => f,
  btnType: 'transparent-white',
  btnSize: 'middle',
  btnShadow: false,
  disabled: false,
};

