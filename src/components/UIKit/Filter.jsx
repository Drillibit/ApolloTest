import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RootClose from 'react-overlays/lib/RootCloseWrapper';

import { Icon } from './Icon';

const FilterWrapper = styled.div`
  position: relative;
  filter: ${({ isOpen }) => (isOpen ? 'drop-shadow(0 0 40px rgba(0,0,0, 0.3))' : 'none')};
`;

const FilterTitle = styled.button`
  position: relative;
  cursor: pointer;
  color: #80818a;
  border: none;
  background-color: #fff;
  outline: none;
  height: 47px;
  padding: 11px 23px;
  line-height: 1;
  font-size: 20px;

  &> svg{
    font-size: 14px;
    margin-left: 5px;
    transition: all 0.3s ease;
  }
`;

const StyledFilterList = styled.div`
  position: absolute;
  top: 47px;
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

const FilterList = (props) => {
  const list = [
    { id: 356, name: 'Мультфильм' },
    { id: 357, name: 'Комедия' },
    { id: 358, name: 'Боевик' },
    { id: 359, name: 'Приключения' },
    { id: 360, name: 'Фантастика' },
    { id: 361, name: 'Мелодрама' },
    { id: 362, name: 'Ужасы' },
    { id: 363, name: 'Детектив' },
    { id: 364, name: 'Спорт' },
    { id: 365, name: 'Документальное' },
    { id: 366, name: 'Триллер' },
    { id: 367, name: 'Семейное кино' },
    { id: 368, name: 'Драма' },
    { id: 369, name: 'Арт-Хаус' },
  ];

  return (
    <StyledFilterList isOpen={props.isOpen}>
      {
        list.map(item => (
          <StyledButton key={item.id}><span onClick={props.handleClickFilterItem}>{item.name}</span></StyledButton>
        ))
      }
    </StyledFilterList>
  );
};

export class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      currentFilter: '',
    };
  }

  handleOpen= (e) => {
    e.preventDefault();

    this.setState({
      isOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  }

  handleClickFilterItem = (e) => {
    this.setState({
      isOpen: false,
      currentFilter: e.target.innerHTML,
    });
  }

  render() {
    console.log(this.state);

    return (
      <FilterWrapper isOpen={this.state.isOpen}>
        <FilterTitle onClick={this.handleOpen}>
          Жанр <Icon icon="chevron-down" rotation={this.state.isOpen ? 180 : ''} />
        </FilterTitle>
        {this.state.isOpen && (
        <RootClose onRootClose={this.handleClose}>
          <FilterList isOpen={this.state.isOpen} handleClickFilterItem={this.handleClickFilterItem} />
        </RootClose>)}
      </FilterWrapper>
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

