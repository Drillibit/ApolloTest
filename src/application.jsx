import React from 'react';
import { hot } from 'react-hot-loader';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { getMainDefinition } from 'apollo-utilities';
import { createUploadLink } from 'apollo-upload-client';
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

const ws = new SubscriptionClient('ws://localhost:3000/graphql', {
  reconnect: true
});

const httpLink = createUploadLink({
  uri: '/graphql',
  credentials: 'include'
});

const wsLink = new WebSocketLink(ws);
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache
});

export const Application = hot(module)(() => (
  <ApolloProvider client={client}>
    <Query query={CURRENT_USER}>
      {({ error, loading, data: { CurrentUser } }) => {
        if (loading) return <Preloader>Загрузка</Preloader>;
        if (error) return `Error ${error.message}`;
        return (
          <Main auth={CurrentUser} />
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
