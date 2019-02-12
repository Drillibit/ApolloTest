import React from 'react';
import { Query } from 'react-apollo';

import { GET_TRANDING } from '../components/Requests/frontPage';
import { FeaturedMovie } from '../components/UIKit/FeaturedMovie';

export const FeaturedContainer = () => (
  <Query
    query={GET_TRANDING}
    variables={{
      page: `${1}`,
      genre: '',
      sortBy: '',
      source: false
    }}
  >
    {({ error, data }) => {
      if (data.tranding === undefined) return '';
      if (error) return `Error ${error.message}`;
      return (
        <FeaturedMovie movie={data.tranding.results[0]} />
      );
    }}
  </Query>
);
