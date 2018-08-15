import React, { Component } from 'react';
import styled from 'styled-components';
import { func, object, objectOf, arrayOf, string } from 'prop-types';

import { StyledGrid, StyledRow, StyledCol } from '$helpers/grid';
import { Preview } from './UIKit/Preview';

const FavouritesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledFavourite = styled.div`
  margin: 10px;
`;

export class Favourites extends Component {
  componentDidMount() {
    this.props.fetchNowPlaying();
  }

  render() {
    const { byId, favourites } = this.props;

    return (
      <StyledGrid>
        <StyledRow>
          <StyledCol xs={12}>
            <FavouritesWrapper>
              {favourites.map(id => (byId[id] &&
                <StyledFavourite key={byId[id].id}>
                  <Preview
                    voteAverage={byId[id].vote_average}
                    voteCount={byId[id].vote_count}
                    size={byId[id].size}
                    description={byId[id].overview}
                    title={byId[id].title}
                    bg={byId[id].poster}
                    year={byId[id].release_date}
                    duration={byId[id].duration}
                    pg={byId[id].pg}
                    genre={byId[id].genre}
                    cast={byId[id].cast}
                    isFavourite
                  />
                </StyledFavourite>
              ))}
            </FavouritesWrapper>
          </StyledCol>
        </StyledRow>
      </StyledGrid>
    );
  }
}

Favourites.propTypes = {
  byId: objectOf(object),
  fetchNowPlaying: func,
  favourites: arrayOf(string),
};

Favourites.defaultProps = {
  byId: {},
  fetchNowPlaying: f => f,
  favourites: [],
};
