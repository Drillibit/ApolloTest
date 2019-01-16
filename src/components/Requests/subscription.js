import gql from 'graphql-tag';

export const ADDED_FAVOURITE = gql`
 subscription addFavourite {
    addFavourite {
        favouriteMovies {
        _id
      }
    }
  }
`;
