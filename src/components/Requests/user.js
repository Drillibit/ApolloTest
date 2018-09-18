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

export const LOG_IN = gql`
  mutation Login ($password: String!,$email: String! ){
    logIn(email: $email, password: $password){
      id
      name
      email
    }
  }
`;
