import React, { Component } from 'react';
import styled from 'styled-components';
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
    state = {
      showDropdown: false
    };
    handleDropDown = () => {
      this.setState({
        showDropdown: !this.state.showDropdown
      });
    };

    renderContent = () => {
      const { showDropdown } = this.state;
      const { btnClick, options, activeOption } = this.props;
      if (showDropdown) {
        return (
          <DropdownList btnClick={btnClick} activeOption={activeOption} options={options} />
        );
      }
    };

    render() {
      const { activeOption, activeOptionText } = this.props;
      const { showDropdown } = this.state;
      console.log(activeOption);
      return (
        <DropdownContainer>
          <ButtonContainer>
            <DropdownButton onClick={this.handleDropDown}>{activeOptionText}</DropdownButton>
            <DropdownArrow alt="dropdown-arrow" src={angle} active={showDropdown} />
          </ButtonContainer>           
          {this.renderContent()}
        </DropdownContainer>
      );
    }
}
