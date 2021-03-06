import React, { Component } from 'react';
import styled from 'styled-components';
import RootClose from 'react-overlays/lib/RootCloseWrapper';

import { Icon } from './Icon';

type StyledFilterWrapperType = {
  isOpen: boolean
};

const StyledFilterWrapper = styled.div<StyledFilterWrapperType>`
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

const StyledFilterList = styled.div<StyledFilterWrapperType>`
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

type StyledListButtonType = {
  active: boolean
};
const StyledListButton = styled.button<StyledListButtonType>`
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
  ${({ active }) => (active && 'color: #ff0079;')}

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

type FilterProp = {
  list: [{
    id: string
    name: string
  }]
  activeGenre: {
    name: string
    id: string
  }
  onChange: (id:string) => void 
};
export class Filter extends Component<FilterProp> {
  state = {
    isOpen: false,
  };
  static defaultProps = {
    list: [{}],
    activeGenre: {
      name: 'Жанр',
      id: ''
    }
  };
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleClose = () => {
    const { isOpen } = this.state;
    if(isOpen) {
      this.setState({
        isOpen: false,
      });
    }
  };

  handleClickFilterItem = (e:any) => {
    this.handleToggle();
    this.props.onChange(e.target.dataset.id);
  };

  render() {
    return (
      <RootClose onRootClose={this.handleClose}>
        <StyledFilterWrapper isOpen={this.state.isOpen}>
          <StyledFilterTitle>
            <StyledFilterButton onClick={this.handleToggle}>
              {this.props.activeGenre.name} <Icon size="sm" color="gray300" icon="chevron-down" rotation={this.state.isOpen ? 180 : undefined} />
            </StyledFilterButton>

            <StyledFilterList isOpen={this.state.isOpen}>
              {this.props.list.map(item => (
                <StyledListButtonWrapper key={item.id}>
                  <StyledListButton
                    active={this.props.activeGenre.id === item.id}
                    data-id={item.id}
                    onClick={this.handleClickFilterItem}
                  >
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
