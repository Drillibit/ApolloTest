import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import { store } from './redux/store';
import { ConnectedHeader } from './containers/ConnectedHeader';

export const Application = hot(module)(() => (
  <Provider store={store}>
    <ConnectedHeader />
  </Provider>
));
