import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../Icon';

const StyledDropdownContent = styled.div`
  display: flex;
  border-radius: 2px;
  flex-direction: column;
  background-color: #ffffff;
  padding-right: 24px;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41), 0 2px 9px 1px rgba(0, 0, 0, 0.28);
  padding-left: 16px;
  top: 23px;
  right: 32px;
  position: absolute;
`;

const StyledDropGroup = styled.div`
  display: flex;
  align-items: center;
`;

const StyledChecked = styled(Icon)`
  width: 14px;
  height: 14px;
  visibility: ${({ active }) => !active && 'hidden'};
`;

const StyledDropdownBtn = styled.button`
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

export const DropdownList = ({ options, handleChange, activeOption }) => (
  <StyledDropdownContent>
    {options.map(({ value, id }) => (
      <StyledDropGroup key={id}>
        <StyledChecked icon="check" active={id === activeOption.id} />
        <StyledDropdownBtn onClick={handleChange} value={id}>
          {value}
        </StyledDropdownBtn>
      </StyledDropGroup>
      )
    )}
  </StyledDropdownContent>
);

DropdownList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func.isRequired,
  activeOption: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number]
  )).isRequired
};

DropdownList.defaultProps = {
  options: []
};
