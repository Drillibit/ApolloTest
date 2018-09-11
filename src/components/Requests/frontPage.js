import { gql } from 'apollo-boost';

export const GET_TRANDING = gql`
  query tranding($page: String!, $genre: String, $sortBy: String, $noDate: Boolean ) {
    tranding(page: $page, genre: $genre, sortBy: $sortBy, noDate: $noDate) {
      page
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

export const GET_GENRES = gql`
  query genres {
    genres_arr {
      id
      name
    }
  }
`;
