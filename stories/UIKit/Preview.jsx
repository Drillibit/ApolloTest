import { storiesOf } from '@storybook/react';
import React, { Children, Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Container } from '../helpers/Container';
import { Preview } from '../../src/components/UIKit/Preview';
import bg from './tmp/tmpbg.png';

const stories = storiesOf('UIKit/Preview', module);

class PreviewWrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  state = {
    voteAverage: 5,
    voteCount: 4.546,
    size: 'md',
    image: bg,
    description: 'Фильм рассказывает о приключениях писателя Ньюта Скамандера в Нью-Йоркском секретном обществе волшебниоков',
    title: 'Фантастические твари и где они обитают',
    year: 2017,
    duration: 133,
    pg: '12+',
    genre: 'Фантастика, Приключения, Семейное кино',
    cast: 'Эдди Редмэйн, Кэтрин Уотерстон, Элисон Судол, Колин Фаррелл, Эзра Миллер, Джемма Чан',
  }

  render() {
    const preview = Children.only(this.props.children);

    return cloneElement(preview, {
      voteAverage: this.state.voteAverage,
      voteCount: this.state.voteCount,
      size: this.state.size,
      description: this.state.description,
      title: this.state.title,
      bg: this.state.image,
      year: this.state.year,
      duration: this.state.duration,
      pg: this.state.pg,
      genre: this.state.genre,
      cast: this.state.cast
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
