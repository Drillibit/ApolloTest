import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RootClose from 'react-overlays/lib/RootCloseWrapper';

import { Icon } from './Icon';

/* eslint-disable */

const FilterWrapper = styled.div`
  position: relative;
  filter: ${({ isOpen }) => (isOpen ? 'drop-shadow(0 0 40px rgba(0,0,0, 0.3))' : 'none')};
  text-align: center;
`;

const FilterTitle = styled.button`
  position: relative;
  cursor: pointer;
  color: #80818a;
  border: none;
  background-color: #fff;
  outline: none;
  height: 40px;
  padding: 10px 23px;
  line-height: 1;
  font-size: 20px;

  &> i{
    font-size: 14px;
    margin-left: 5px;
    transition: all 0.3s ease;
  }
`;

const StyledFilterList = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  width: 392px;
  height: 0;
  height: ${({ isOpen }) => (isOpen ? '320px' : '0px')};
  padding: 11px 23px;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #fff;
`;

const StyledButton = styled.button`
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

  span {
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
  }
`;

export class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      currentFilter: this.props.list[0].name,
    };
  }

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

  handleClickFilterItem = (id) => (e) => {
    this.setState({
      isOpen: false,
      currentFilter: e.target.innerHTML,
    });

    this.props.onChange(id);
  };

  render() {
    // console.log(this.state);

    return (
      <RootClose onRootClose={this.state.isOpen ? this.handleClose : null}>
        <FilterWrapper isOpen={this.state.isOpen}>
          <FilterTitle onClick={this.handleToggle}>
            Жанр <Icon icon="chevron-down" rotation={this.state.isOpen ? 180 : null} />
          </FilterTitle>
          <StyledFilterList isOpen={this.state.isOpen}>
            {this.props.list.map(item => (
              <StyledButton key={item.id}><span onClick={this.handleClickFilterItem(item.id)}>{item.name}</span></StyledButton>
            ))}
          </StyledFilterList>
        </FilterWrapper>
      </RootClose>
    );
  }
}

Filter.propTypes = {
  currentFilter: PropTypes.string,
  isOpen: PropTypes.bool,
};

Filter.defaultProps = {
  isOpen: false,
  currentFilter: '',
};

