import { gql } from 'apollo-boost';

export const CURRENT_USER = gql`
 {
  currentUser {
    name
    email
    favouriteMovies { 
      _id
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

export const SIGN_UP = gql`
  mutation SignUp ($password: String!,$email: String!, $name: String!){
    signUp(email: $email, password: $password, name: $name){
      id
      name
      email
    }
  }
`;

export const ADD_FAVOURITE = gql`
  mutation addFavourite($userId: ID!, $favouriteId: ID!, $favourite: Boolean!){
    addFavourite(userId: $userId, favouriteId: $favouriteId, favourite: $favourite){
      favouriteMovies{
        _id
        id
      }
    }
  }
`;
