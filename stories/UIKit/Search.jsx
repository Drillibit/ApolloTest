import React, { Children, Component, cloneElement } from 'react';
import { object } from 'prop-types';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Container } from '../helpers/Container';
import { Search } from '../../src/components/UIKit/Search';
import { filmsList } from '../helpers/testFilmsList';


const stories = storiesOf('UIKit/Search', module);

const StyledContainer = styled(Container)`
  justify-content: flex-end;
`;

class SearchWrapComponent extends Component {
  state = {
    value: '',
    result: [],
    isOpen: false,
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value }, () => this.filterFilm());
  };

  handleClick = () => {
    this.setState(state => ({ ...state, isOpen: !state.isOpen }));
  };

  filterFilm = () => {
    const { value } = this.state;
    const text = value.toLowerCase().trim();
    const filter = filmsList.filter(item => item.title.toLowerCase().includes(text));
    this.setState({ result: text ? filter : [] });
  };

  render() {
    console.log(this.state.isOpen, 'open');
    const searchComponent = Children.only(this.props.children);

    return cloneElement(searchComponent, {
      onChange: this.handleChange,
      onClick: this.handleClick,
      value: this.state.value,
      isOpen: this.state.isOpen,
      result: this.state.result,
    });
  }
}

SearchWrapComponent.propTypes = {
  children: object
};

SearchWrapComponent.defaultProps = {
  children: {}
};

stories.addWithJSX('Search', () => (
  <StyledContainer dark>
    <SearchWrapComponent>
      <Search />
    </SearchWrapComponent>
  </StyledContainer>
));
