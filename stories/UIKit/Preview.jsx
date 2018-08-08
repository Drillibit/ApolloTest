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
    vote_count: 2079,
    id: 351286,
    video: false,
    vote_average: 6.6,
    title: 'Jurassic World: Fallen Kingdom',
    poster: "https://image.tmdb.org/t/p/w500/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
    original_title: "Jurassic World: Fallen Kingdom",
    genre_ids: [
      28,
      12,
      878
    ],
    adult: false,
    overview: "Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
    release_date: "2018-06-06"
  }

  render() {
    const preview = Children.only(this.props.children);

    return cloneElement(preview, {
      voteAverage: this.state.vote_average,
      voteCount: this.state.vote_count,
      size: this.state.size,
      description: this.state.overview,
      title: this.state.title,
      bg: this.state.poster,
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
