import React, { Component } from 'react';
import styled from 'styled-components';
import angle from './angle.svg';
// import check from './check.svg';

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownButton = styled.button`
  border: none;
  font-size: 14px;
  outline: none;
`;

const DropdownArrow = styled.img`
  width: 14px;
  transform: ${({ active }) => active && 'rotate(-180deg)'};
  transition: all ease-in .3s;
`;

export class Dropdown extends Component {
    state = {
      showDropdown: false,
      dropDownValue: 'По дате выхода'
    };
    handleDropDown = () => {
      this.setState({
        showDropdown: !this.state.showDropdown
      });
    };

    handleFilterPick = (e) => {
      const val = e.target.value;

      this.setState({
        dropDownValue: val
      });
    };

    render() {
      const { dropDownValue, showDropdown } = this.state;
      return (
        <div>
          <DropdownContainer>
            <DropdownButton onClick={this.handleDropDown}>{dropDownValue}</DropdownButton>
            <DropdownArrow alt="dropdown-arrow" src={angle} active={showDropdown} />
          </DropdownContainer>
          {/* <div>
            <button value="По дате выхода">По дате выхода</button>
            <button value="По рейтингу">По рейтингу</button>
            <button value="По алфавиту">По алфавиту</button>
          </div> */}
        </div>
      );
    }
}
