import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import styled from 'styled-components';
import RootClose from 'react-overlays/lib/RootCloseWrapper';

import { Icon } from './Icon';

const StyledFilterWrapper = styled.div`
  position: relative;
  filter: ${({ isOpen }) => (isOpen ? 'drop-shadow(0 0 40px rgba(0,0,0, 0.3))' : 'none')};
  text-align: center;
`;

const StyledFilterTitle = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledFilterButton = styled.button`
  cursor: pointer;
  color: #80818a;
  border: none;
  outline: none;
  height: 40px;
  padding: 10px 23px;
  line-height: 1;
  font-size: 20px;
  background-color: #fff;

  &> i {
    font-size: 14px;
    margin-left: 5px;
    transition: all 0.3s ease;
  }
`;

const StyledFilterList = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  width: 392px;
  height: 0;
  height: ${({ isOpen }) => (isOpen ? '320px' : '0px')};
  padding: 11px 23px;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #fff;
`;

const StyledListButton = styled.button`
  position: relative;
  height: 40px;
  margin-right: 5px;
  color: #494c62;
  font-size: 20px;
  background-color: #fff;
  padding: 0;
  border: none;
  outline: none;
  text-align: left;
  transition: color 0.3s ease;
`;

const StyledListButtonText = styled.span`
  position: relative;
  cursor: pointer;
  
  &:before, &:after {
    content: '';
    display: block;
    width: 0px;
    height: 1px;
    position: absolute;
    background-color: #ff0079;
    bottom: -8px;
    transition: width 0.3s ease;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }

  &:hover {
    color: #ff0079;

    &:before, &:after {
      width: 50%;
    }
  }
`;

export class Filter extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleClickFilterItem = (id) => {
    this.handleToggle();

    this.props.onChange(id);
  };

  render() {
    return (
      <RootClose onRootClose={this.state.isOpen ? this.handleClose : null}>
        <StyledFilterWrapper isOpen={this.state.isOpen}>
          <StyledFilterTitle>
            <StyledFilterButton onClick={this.handleToggle}>
              Жанр <Icon icon="chevron-down" rotation={this.state.isOpen ? 180 : null} />
            </StyledFilterButton>

            <StyledFilterList isOpen={this.state.isOpen}>
              {this.props.list.map(item => (
                <StyledListButton key={item.id}>
                  <StyledListButtonText
                    onClick={() => this.handleClickFilterItem(item.id)}
                  >
                    {item.name}
                  </StyledListButtonText>
                </StyledListButton>
              ))}
            </StyledFilterList>
          </StyledFilterTitle>
        </StyledFilterWrapper>
      </RootClose>
    );
  }
}

Filter.propTypes = {
  isOpen: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.object),
  onChange: func,
};

Filter.defaultProps = {
  isOpen: false,
  list: [{}],
  onChange: f => f,
};

