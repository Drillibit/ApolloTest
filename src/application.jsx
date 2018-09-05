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
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { store, history } from './redux/store';
import { Main } from './components/Main';

import './components/helpers/injectGlobalStyles';

const defaults = {
  Movie: {
    __typename: 'Movie',
    Movie: 299536,
    backdrop_path: '/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
    id: '299536',
    overview: '',
    runtime: '149',
    title: '',
    vote_average: 8.3,
    vote_count: 7600
  }
};

const client = new ApolloClient({
  uri: process.env.BASE_URL,
  clientState: {
    defaults
  }
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
