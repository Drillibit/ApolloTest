import { storiesOf } from '@storybook/react';
import React, { Children, Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Container } from '../helpers/Container';
import { Preview } from '../../src/components/UIKit/Preview';

const stories = storiesOf('UIKit/Preview', module);

class PreviewWrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  state = {
    voteAverage: 5,
    voteCount: 4.546,
    size: 'md',
    image: '',
    description: 'Фильм рассказывает о приключениях писателя Ньюта Скамандера в Нью-Йоркском секретном обществе волшебниоков'
  }

  render() {
    const preview = Children.only(this.props.children);

    return cloneElement(preview, {
      voteAverage: this.state.voteAverage,
      voteCount: this.state.voteCount,
      size: this.state.size,
      description: this.state.description
    });
  }
}

stories.addWithJSX(
  'Preview component',
  () => (
    <Container>
      <PreviewWrapper>
        <Preview />
      </PreviewWrapper>
    </Container>
  )
);
