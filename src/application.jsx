import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './redux/store';
import { ConnectedMoviesList } from './containers/ConnectedMoviesList';
import './components/helpers/injectGlobalStyles';

export const Application = hot(module)(() => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={ConnectedMoviesList} />
    </ConnectedRouter>
  </Provider>
));
