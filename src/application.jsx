import React from 'react';
import { hot } from 'react-hot-loader';
import ApolloClient, { gql, InMemoryCache,  } from 'apollo-boost';
import { Query, ApolloProvider } from 'react-apollo';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHeart,
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCheck,
  faSearch,
  faPlay,
  faStar as faStarFill,
  faQuoteLeft,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as faHeartFill,
  faStar
} from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';


import { CURRENT_USER } from './components/Requests/user';
import { Main } from './components/Main';

import './components/helpers/injectGlobalStyles';
import { Preloader } from './components/UIKit/Preloader';


export const GET_TRANDING = gql`
  query tranding($page: String!) @client {
    tranding(page: $page) {
      page
      results {
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

const cache = new InMemoryCache({
  dataIdFromObject: obj => obj.id
});

const client = new ApolloClient({
  uri: process.env.BASE_URL,
  cache,
  credentials: 'include',
});

export const Application = hot(module)(() => (
  <ApolloProvider client={client}>
    <Query query={CURRENT_USER}>
      {({ error, loading, data: { currentUser } }) => {
        if (loading) return <Preloader>Загрузка</Preloader>;
        if (error) return `Error ${error.message}`;
        return (
          <Main auth={currentUser} />
        );
    }}
    </Query>
  </ApolloProvider>
));

library.add(
  faHeart,
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCheck,
  faSearch,
  faPlay,
  faHeartFill,
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faQuoteLeft,
  faStarFill,
  faStar,
  faTimes
);
