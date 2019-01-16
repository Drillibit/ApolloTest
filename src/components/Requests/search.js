import gql from 'graphql-tag';

export const GET_SEARCH_RES = gql`
  query search ($req: String) {
    search (req: $req){
      id
      title
    }
  }
`;
