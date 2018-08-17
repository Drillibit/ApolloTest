import React, { PureComponent } from 'react';
import styled from 'styled-components';
import RootClose from 'react-overlays/lib/RootCloseWrapper';
import PropTypes from 'prop-types';

import { colors } from '../../helpers/colors';
import { Icon } from '../Icon';
import { DropdownList } from './DropdownList';

const StyledDropdownContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 192px;
  border-radius: 2px;
  background-color: #fff;
  position: relative;
  z-index: 1;
`;

const StyledDropdownButton = styled.button`
  border: none;
  font-size: 14px;
  outline: none;
  color: ${colors.grey300};
`;

const StyledButtonContainer = styled.div`
  padding: 10px 23px;
  display: flex;
  height: 20px;
`;

const StyledDropdownArrow = styled(Icon)`
  width: 10px;
  margin-left: 7px;
  transition: all ease-in .3s;
`;

export class Dropdown extends PureComponent {
  static propTypes = {
    handleChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object),
    activeOption: PropTypes.objectOf(PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number]
    ))
  };

  static defaultProps = {
    handleChange: f => f,
    options: [],
    activeOption: {}
  };

  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  showDropdown = () => {
    this.setState({
      isOpen: true
    });
  };

  closeDropdown = (e) => {
    const picked = parseInt(e.target.value, 10);
    if (picked >= 0) {
      this.props.handleChange(picked);
    }

    this.setState({
      isOpen: false
    });
  };

  render() {
    const { activeOption, options } = this.props;
    const { isOpen } = this.state;
    return (
      <StyledDropdownContainer>
        <StyledButtonContainer>
          <StyledDropdownButton onClick={this.handleClick}>
            {activeOption.value || 'Не выбранно'}
            <StyledDropdownArrow icon="chevron-down" rotation={isOpen ? 180 : null} />
          </StyledDropdownButton>
        </StyledButtonContainer>
        {isOpen && (
        <RootClose onRootClose={this.closeDropdown}>
          <DropdownList
            closeDropdown={this.closeDropdown}
            activeOption={activeOption}
            options={options}
          />
        </RootClose>
      )}
      </StyledDropdownContainer>
    );
  }
}

