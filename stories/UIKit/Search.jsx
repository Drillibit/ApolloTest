import React, { Children, Component, cloneElement } from 'react';
import { object } from 'prop-types';
import { storiesOf } from '@storybook/react';
import { Container } from '../helpers/Container';
import { Search } from '../../src/components/UIKit/Search';
import { filmsList } from '../helpers/testFilmsList';


const stories = storiesOf('UIKit/Search', module);

class SearchWrapComponent extends Component {
  state = {
    value: '',
    result: [],
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value }, () => this.filterFilm());
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
      value: this.state.value,
      result: this.state.result
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
  <Container dark>
    <SearchWrapComponent>
      <Search />
    </SearchWrapComponent>
  </Container>
));
