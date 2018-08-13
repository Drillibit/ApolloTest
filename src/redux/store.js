import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import { reducers } from './reducers';
import { rootSaga } from './rootSaga';
import { Application } from '../application';
import '../components/helpers/injectGlobalStyles';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  connectRouter(history)(reducers), // new root reducer with router state
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware
    ),
  ),
);

sagaMiddleware.run(rootSaga);

export const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={Application} />
    </ConnectedRouter>
  </Provider>
);
