import React from 'react';
import styled from 'styled-components';
import RootClose from 'react-overlays/lib/RootCloseWrapper';
import PropTypes from 'prop-types';
import angle from './angle.svg';

import { DropdownList } from './DropdownList';


const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 192px;
  border-radius: 2px;
  background-color: #fff;
  position: relative;
`;

const DropdownButton = styled.button`
  border: none;
  font-size: 14px;
  outline: none;
  color: #80818a;
`;
const ButtonContainer = styled.div`
  display: flex;
  height: 20px;
`;

const DropdownArrow = styled.img`
  width: 10px;
  transform: ${({ active }) => active && 'rotate(-180deg)'};
  transition: all ease-in .3s;
`;
export const Dropdown = (

  {
    handleChange, activeOption, options, isOpen, showDropdown, closeDropdown
  }

) => {
  const renderContent = () => (
    <RootClose onRootClose={closeDropdown}>
      <DropdownList handleChange={handleChange} activeOption={activeOption} options={options} />
    </RootClose>
  );
  return (
    <DropdownContainer>
      <ButtonContainer>
        <DropdownButton onClick={showDropdown}>{activeOption.value}</DropdownButton>
        <DropdownArrow onClick={showDropdown} alt="dropdown-arrow" src={angle} active={isOpen} />
      </ButtonContainer>
      {isOpen && renderContent()}
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  closeDropdown: PropTypes.func.isRequired,
  showDropdown: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  activeOption: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number]
  )).isRequired
};

