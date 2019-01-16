import gql from 'graphql-tag';

export const GET_MOVIE = gql`
  query movie($id: ID!){
    movie(id: $id){
      id 
      title
      overview
      genres {
        id
        name
      }
      backdrop_path
      runtime
      vote_count
      vote_average
    }
  }
`;
