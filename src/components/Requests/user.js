import { gql } from 'apollo-boost';

export const CURRENT_USER = gql`
 {
  currentUser {
    name
    email
    favouriteMovies { 
      _id
        id 
      title
      overview
      genres {
        id
        name
      }
      backdrop_path
      poster_path
      release_date
      production_countries {
        name
      }
      runtime
      vote_count
      vote_average
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
