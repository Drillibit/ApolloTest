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
    voteAverage: 5,
    voteCount: 4.546,
    size: 'lg'
  }

  render() {
    const rating = Children.only(this.props.children);

    return cloneElement(rating, {
      voteAverage: this.state.voteAverage,
      voteCount: this.state.voteCount,
      size: this.state.size
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

