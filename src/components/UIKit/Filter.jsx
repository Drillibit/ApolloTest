import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from './Icon';
import { target } from '../../../node_modules/glamor';

const FilterWrapper = styled.div``;
const FilterTitle = styled.div`
  cursor: pointer;
`;

const StyledFilterList = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
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
          <button key={item.id} onClick={props.handleClickFilterItem} value={item.name}>{item.name}</button>
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

  handleClickTittle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleClickFilterItem = (e) => {
    this.setState({
      isOpen: false,
      currentFilter: e.target.value,
    });
  }

  render() {
    console.log(this.state);

    return (
      <FilterWrapper>
        <FilterTitle onClick={this.handleClickTittle}>
          Жанр <Icon icon={this.state.isOpen ? 'chevron-up' : 'chevron-down'} />
        </FilterTitle>
        <FilterList isOpen={this.state.isOpen} handleClickFilterItem={this.handleClickFilterItem} />
      </FilterWrapper>
    );
  }
}

Filter.propTypes = {
  currentFilter: PropTypes.string,
};

Filter.defaultProps = {
  isOpen: false,
  handleClickTittle: f,
  currentFilter: '',
};

