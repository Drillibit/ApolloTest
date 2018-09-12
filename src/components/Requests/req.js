import { gql } from 'apollo-boost';

export const GET_MOVIE_EXTEND = gql`
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
      poster_path
      release_date
      production_countries {
        name
      }
      runtime
      vote_count
      vote_average
      video{
        name
        key
      }
      similar{
        id
        title
        backdrop_path
        poster_path
        vote_count
        vote_average
        overview
        runtime
        release_date
      }
    }
  }
`;
