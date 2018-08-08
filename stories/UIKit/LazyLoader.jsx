/* eslint-disable */
import React, { Component, Children, cloneElement } from 'react';
import { storiesOf } from '@storybook/react';

import { LazyLoader } from '$UIKit/LazyLoader';
import { filmsList } from './tmp/filmsList';

const stories = storiesOf('UIKit/LazyLoader', module);

class CustomComponentManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: filmsList,
    };
  }

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    console.log(this.state);
    const customComponent = Children.only(this.props.children);

    return cloneElement(customComponent, {
      onScroll: this.handleChange,
      list: this.state.list,
    });
  }
}

stories.addWithJSX(
  'Ваш компонент',
  () => (
    <CustomComponentManager>
      <LazyLoader />
    </CustomComponentManager>
  )
);

