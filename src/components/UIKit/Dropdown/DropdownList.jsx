import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import check from './check.svg';

const DropdownContent = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&subset=cyrillic');
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  border-radius: 2px;
  flex-direction: column;
  background-color: #ffffff;
  padding-right: 24px;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41), 0 2px 9px 1px rgba(0, 0, 0, 0.28);
  padding-left: 16px;
  margin-left: 100px;
  -webkit-font-smoothing: antialiased;
`;

const DropGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Checked = styled.img`
  width: 14px;
  height: 14px;
  visibility: ${({ active }) => !active && 'hidden'};
`;

const TextBtn = styled.p`
  white-space:nowrap;
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  display: inline-block;
  padding-bottom: 4px;
  transition: all ease .2s;
  &:hover {
    border-bottom: 1px solid;
    color: #ff0079;
  }
`;

const DropdownBtn = styled.button`
  white-space:nowrap;
  border: none;
  color: #494c62;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 8px;
  border: 1px solid transparent;
  text-align: left;
  padding-left: 3px;
  cursor: pointer;
  border: 1px solid transparent;
  display: inline-block;
  padding-bottom: 4px;
  transition: all ease .2s;
  outline: none;
  &:hover {
    border-bottom: 1px solid;
    color: #ff0079;
  }
`;

export const DropdownList = ({ options, btnClick, activeOption }) => (
  <DropdownContent>
    {options.map(({ value, id }) => {
      console.log(activeOption);
      return (
        <DropGroup key={id}>
          <Checked src={check} active={id === activeOption} />
          <DropdownBtn onClick={btnClick} value={id}>
            {value}
          </DropdownBtn>
        </DropGroup>
      );
    })}
  </DropdownContent>
);

DropdownList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  btnClick: PropTypes.func.isRequired
};

DropdownList.defaultProps = {
  options: []
};
