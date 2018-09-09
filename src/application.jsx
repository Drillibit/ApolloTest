import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
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

import { store, history } from './redux/store';
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
  user: {
    __typename: 'User',
    id: 1,
    name: 'Admin'
  }
};


const client = new ApolloClient({
  uri: process.env.BASE_URL,
  clientState: {
    defaults,
    resolvers: {
      Query: {
        tranding: () => {
          console.log('wow');
        }
      }
    }
  },
});


export const Application = hot(module)(() => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter>
    </Provider>
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
