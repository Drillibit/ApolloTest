import React, { Component } from 'react';
import styled from 'styled-components';
import { func, object, objectOf, arrayOf, string } from 'prop-types';

import { StyledGrid, StyledRow, StyledCol } from '$helpers/grid';
import { ConnectedPreview } from '../containers/ConnectedPreview';

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
    console.log(byId)
    return (
      <StyledGrid>
        <StyledRow>
          <StyledCol xs={12}>
            <FavouritesWrapper>
              {favourites.map(id => (byId[id] &&
                <StyledFavourite key={id}>
                  <ConnectedPreview
                    id={byId[id].id}
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
