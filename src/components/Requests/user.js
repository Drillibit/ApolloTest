import { gql } from 'apollo-boost';

export const CURRENT_USER = gql`
  {
    currentUser{
      id
      email
      favouriteMovies{
        id
      }
    }
  }
`;
