import React, { Component } from 'react';
import styled from 'styled-components';
import angle from './angle.svg';
// import check from './check.svg';

const ImageWrapper = styled.div`
    font-size: 10px;
`;

const DropdownButton = styled.button`
    border: none;
    font-size: 14px;
    outline: none;
`;

const DropdownArrow = styled.img`
    ${({ active }) => active && 'transfrom: rotate(45deg)'}
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
          <DropdownButton onClick={this.handleDropDown}>
            {dropDownValue} <DropdownArrow alt="dropdown-arrow" src={angle} active={showDropdown} />
          </DropdownButton>
          {/* <div>
            <button value="По дате выхода">По дате выхода</button>
            <button value="По рейтингу">По рейтингу</button>
            <button value="По алфавиту">По алфавиту</button>
          </div> */}
        </div>
      );
    }
}
