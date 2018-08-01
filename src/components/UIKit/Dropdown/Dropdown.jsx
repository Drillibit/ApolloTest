import React from 'react';
import styled from 'styled-components';
import RootClose from 'react-overlays/lib/RootCloseWrapper';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
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

const StyledDropdownArrow = styled(Icon)`
  width: 10px;
  transform: ${({ active }) => active && 'rotate(-180deg)'};
  transition: all ease-in .3s;
`;

export const Dropdown = ({
  handleChange, activeOption, options, isOpen, showDropdown, closeDropdown
}) => {
  const renderContent = () => (
    <RootClose onRootClose={closeDropdown}>
      <DropdownList handleChange={handleChange} activeOption={activeOption} options={options} />
    </RootClose>
  );
  return (
    <DropdownContainer>
      <ButtonContainer>
        <DropdownButton onClick={showDropdown}>{activeOption.value} <StyledDropdownArrow icon="chevron-down" active={isOpen} /></DropdownButton>
      </ButtonContainer>
      {isOpen && renderContent()}
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  handleChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  closeDropdown: PropTypes.func,
  showDropdown: PropTypes.func,
  isOpen: PropTypes.bool,
  activeOption: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number]
  ))
};

Dropdown.defaultProps = {
  handleChange: null,
  options: [],
  closeDropdown: null,
  showDropdown: null,
  isOpen: false,
  activeOption: null
};

