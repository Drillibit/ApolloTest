import React, { Component } from 'react';
import styled from 'styled-components';
import { func, object, objectOf, arrayOf, number, boolean } from 'prop-types';

import { Container } from '../../stories/helpers/Container';
import { filmsList } from '../../stories/helpers/testFilmsList';
import { Preview } from './UIKit/Preview';

export class Favourites extends Component {
  componentDidMount() {
    this.props.fetchNowPlaying();
  }

  render() {
    const { list, listById, favourites } = this.props;

    const favorList = [];
    const list1 = filmsList.reduce((acc, item) => ({ ...acc, [item.id]: { ...item } }), {});

    Object.keys(favourites).forEach((key) => {
      if (favourites[key]) {
        favorList.push(key);
      }
    });

    return (
      <Container>
        {favorList.map(item => (
          <Preview
            key={list1[item].id}
            voteAverage={list1[item].vote_average}
            voteCount={list1[item].vote_count}
            size={list1[item].size}
            description={list1[item].overview}
            title={list1[item].title}
            bg={list1[item].poster}
            year={list1[item].release_date}
            duration={list1[item].duration}
            pg={list1[item].pg}
            genre={list1[item].genre}
            cast={list1[item].cast}
          />
        ))}
      </Container>
    );
  }
}

Favourites.propTypes = {
  list: arrayOf(number),
  listById: objectOf(object),
  fetchNowPlaying: func,
  favourites: object,
};

Favourites.defaultProps = {
  list: [],
  listById: {},
  fetchNowPlaying: f => f,
  favourites: {},
};
