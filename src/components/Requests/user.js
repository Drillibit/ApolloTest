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

export const LOG_OUT = gql`
  mutation {
    logOut{
      email
    }
  }
`;
