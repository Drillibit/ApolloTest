import React, { Component } from 'react';
import { func, object, objectOf, arrayOf, number } from 'prop-types';

import { Container } from '../../stories/helpers/Container';
import { Preview } from './UIKit/Preview';

export class Favourites extends Component {
  componentDidMount() {
    this.props.fetchNowPlaying();
  }

  render() {
    const { listById, favourites } = this.props;

    const favorList = [];

    Object.keys(favourites).forEach((key) => {
      if (favourites[key]) {
        favorList.push(key);
      }
    });

    console.log(listById);

    return (
      <Container>
        {favorList.map(id => (
          listById[id] && <Preview
            key={listById[id].id}
            voteAverage={listById[id].vote_average}
            voteCount={listById[id].vote_count}
            size={listById[id].size}
            description={listById[id].overview}
            title={listById[id].title}
            bg={listById[id].poster}
            year={listById[id].release_date}
            duration={listById[id].duration}
            pg={listById[id].pg}
            genre={listById[id].genre}
            cast={listById[id].cast}
          />
        ))}
      </Container>
    );
  }
}

Favourites.propTypes = {
  listById: objectOf(object),
  fetchNowPlaying: func,
  favourites: objectOf(number),
};

Favourites.defaultProps = {
  listById: {},
  fetchNowPlaying: f => f,
  favourites: {},
};
