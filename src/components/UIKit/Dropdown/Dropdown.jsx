import React, { Component } from 'react';
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
`;

const DropdownButton = styled.button`
  border: none;
  font-size: 14px;
  outline: none;
`;
const ButtonContainer = styled.div`
  display: flex;
  height: 20px;
`;

const DropdownArrow = styled.img`
  width: 14px;
  transform: ${({ active }) => active && 'rotate(-180deg)'};
  transition: all ease-in .3s;
`;

export class Dropdown extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    closeDropdown: PropTypes.func.isRequired,
    showDropdown: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    activeOption: PropTypes.objectOf(PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number]
    )).isRequired
  };
    renderContent = () => {
      const {
        handleChange,
        options,
        activeOption,
        closeDropdown
      } = this.props;
      return (
        <RootClose onRootClose={closeDropdown}>
          <DropdownList handleChange={handleChange} activeOption={activeOption} options={options} />
        </RootClose>
      );
    };

    render() {
      const { activeOption, isOpen, showDropdown } = this.props;
      return (
        <DropdownContainer>
          <ButtonContainer>
            <DropdownButton onClick={showDropdown}>{activeOption.value}</DropdownButton>
            <DropdownArrow onClick={showDropdown} alt="dropdown-arrow" src={angle} active={isOpen} />
          </ButtonContainer>
          {isOpen && this.renderContent()}
        </DropdownContainer>
      );
    }
}

