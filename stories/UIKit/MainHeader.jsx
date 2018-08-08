import React, { Children, Component, cloneElement } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { object } from 'prop-types';
import { filmsList } from '../helpers/testFilmsList';
import bg from '../assets/tmp/mask.png';
import { MainHeader } from '../../src/components/UIKit/MainHeader';

const StyledContainer = styled.div`
  height: 500px;
  background-image: url(${bg});
`;

const stories = storiesOf('UIKit/MainHeader', module);

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

  handleClose = () => {
    this.setState(state => ({ ...state, isOpen: false }));
  };

  filterFilm = () => {
    const { value } = this.state;
    const text = value.toLowerCase().trim();
    const filter = filmsList.filter(item => item.title.toLowerCase().includes(text));
    this.setState({ result: text ? filter : [] });
  };

  render() {
    const searchComponent = Children.only(this.props.children);

    return cloneElement(searchComponent, {
      onChange: this.handleChange,
      onClick: this.handleClick,
      onClose: this.handleClose,
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

stories.addWithJSX('main', () => (
  <StyledContainer>
    <SearchWrapComponent>
      <MainHeader />
    </SearchWrapComponent>
  </StyledContainer>
));
