import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import styled from 'styled-components';
import RootClose from 'react-overlays/lib/RootCloseWrapper';

import { Icon } from './Icon';

const StyledFilterWrapper = styled.div`
  position: relative;
  filter: ${({ isOpen }) => (isOpen ? 'drop-shadow(0 0 40px rgba(0,0,0, 0.3))' : 'none')};
  z-index: ${({ isOpen }) => (isOpen ? '100' : 'initial')};
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

  &> i > svg {
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
 width: 500px;  
 height: 0;
 height: ${({ isOpen }) => (isOpen ? '480px' : '0px') };
 padding: 11px 23px;
 flex-wrap: wrap;
 flex-direction: column;
 background-color: #fff;
`;

const StyledListButtonWrapper = styled.div`
  text-align: left;
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
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #ff0079;
    position: absolute;
    left: 0;
    bottom: 2px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: #ff0079;

    &::after {
      opacity: 1;
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

  handleClickFilterItem = (e) => {
    this.handleToggle();

    const id = +e.target.dataset.id;

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
                <StyledListButtonWrapper key={item.id}>
                  <StyledListButton data-id={item.id} onClick={this.handleClickFilterItem}>
                    {item.name}
                  </StyledListButton>
                </StyledListButtonWrapper>
              ))}
            </StyledFilterList>
          </StyledFilterTitle>
        </StyledFilterWrapper>
      </RootClose>
    );
  }
}

Filter.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onChange: func,
};

Filter.defaultProps = {
  list: [{}],
  onChange: f => f,
};

