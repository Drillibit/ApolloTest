import { gql } from 'apollo-boost';

export const GET_MOVIE = gql`
  query movie($id: String!){
    movie(id: $id){
      id
      title
      overview
      backdrop_path
      runtime
      vote_count
      vote_average
    }
  }
`;
