import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faChevronUp, faChevronDown, faChevronLeft, faChevronRight, faCheck, faSearch, faPlay, faStar as faStarFill, faQuoteLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartFill, faStar } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { ConnectedHeader } from './containers/ConnectedHeader';

import { store, history } from './redux/store';
import { Main } from './components/Main';
import './components/helpers/injectGlobalStyles';

export const Application = hot(module)(() => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={Main} />
      <ConnectedHeader />
    </ConnectedRouter>
  </Provider>
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
  faTimes,
);
