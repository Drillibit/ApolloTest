import React from 'react';
import { hot } from 'react-hot-loader';
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
import ApolloClient, { gql } from 'apollo-boost';

import { ApolloProvider } from 'react-apollo';

import { Main } from './components/Main';

import './components/helpers/injectGlobalStyles';


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
const defaults = {
  users: {
    __typename: 'Users',
    page: 1,
    userArr: [
      {
        __typename: 'User',
        id: 1,
        name: 'Admin'
      },
      {
        __typename: 'User',
        id: 2,
        name: 'Client'
      }
    ]
  },
};

const client = new ApolloClient({
  uri: process.env.BASE_URL,
  clientState: {
    defaults,
    resolvers: {
      Query: {
        users: (_, { page }, { cache }) => {
          const query = gql`
            query getUser ($page: page) {
              users(page: ${page}) @client {
                page
                userArr
              }
            }
          `;
          const data = cache.readQuery({ query });
          console.log(data);
          return defaults.users;
        }
      },
      Mutation: {}
    }
  },
});

export const Application = hot(module)(() => (
  <ApolloProvider client={client}>
    <Main />
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
