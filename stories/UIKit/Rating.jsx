import { storiesOf } from '@storybook/react';
import React, { Children, Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Container } from '../helpers/Container';
import { Rating } from '../../src/components/UIKit/Rating';

const stories = storiesOf('UIKit/Rating', module);

class RaitngWrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  state = {
    rating: '77'
  }

  handleChange = (e) => {
    const val = e.target.value;
    this.setState({
      rating: val,
    });
  };

  render() {
    const rating = Children.only(this.props.children);

    return cloneElement(rating, {
      handleChange: this.handleChange,
      options: this.state.options,
      activeOption: this.state.activeOption,
      isOpen: this.state.isOpen,
      showDropdown: this.showDropdown,
      closeDropdown: this.closeDropdown
    });
  }
}

stories.addWithJSX(
  'Dropdown component',
  () => (
    <Container>
      <RaitngWrapper>
        <Rating />
      </RaitngWrapper>
    </Container>
  )
);

