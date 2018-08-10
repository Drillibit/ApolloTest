import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import { store } from './redux/store';
import { ConnectedMoviesList } from './containers/ConnectedMoviesList';

export const Application = hot(module)(() => (
  <Provider store={store}>
    <ConnectedMoviesList />
  </Provider>
));
