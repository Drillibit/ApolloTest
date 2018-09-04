import { gql } from 'apollo-boost';

export const GET_TRANDING = gql`
  query tranding($page: String!){
    tranding(page: $page){
      results{
        genre_ids
        id
        title
        backdrop_path
        overview
        poster_path
        release_date
        vote_count
        vote_average
      }
    }
  }
`;
